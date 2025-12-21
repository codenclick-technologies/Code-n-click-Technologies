import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Logging Interceptor
 * Logs incoming requests and outgoing responses
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, body } = request;
    const now = Date.now();

    this.logger.log(`➡️  ${method} ${url}`);

    if (Object.keys(body || {}).length > 0) {
      const bodyString = JSON.stringify(body);
      if (bodyString.length > 1000) {
        this.logger.debug(`Body: ${bodyString.substring(0, 1000)}... [truncated]`);
      } else {
        this.logger.debug(`Body: ${bodyString}`);
      }
    }

    return next.handle().pipe(
      tap({
        next: () => {
          const response = context.switchToHttp().getResponse();
          const delay = Date.now() - now;
          this.logger.log(
            `⬅️  ${method} ${url} ${response.statusCode} - ${delay}ms`,
          );
        },
        error: (error) => {
          const delay = Date.now() - now;
          this.logger.error(
            `❌ ${method} ${url} ${error.status || 500} - ${delay}ms`,
          );
        },
      }),
    );
  }
}
