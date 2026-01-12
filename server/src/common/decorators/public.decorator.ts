import { SetMetadata } from '@nestjs/common';

/**
 * Decorator to mark routes as public (skip JWT authentication)
 * @example @Public()
 */
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
