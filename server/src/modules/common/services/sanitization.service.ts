import { Injectable } from '@nestjs/common';
import sanitizeHtml from 'sanitize-html';

/**
 * Input Sanitization Service
 * Protects against XSS attacks by sanitizing user input
 */
@Injectable()
export class SanitizationService {
  /**
   * Sanitizes HTML content to prevent XSS
   * @param dirty - Unsanitized HTML string
   * @returns Sanitized HTML string
   */
  sanitizeHtml(dirty: string): string {
    return sanitizeHtml(dirty, {
      allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'ol', 'li'],
      allowedAttributes: {
        a: ['href', 'target'],
      },
      allowedSchemes: ['http', 'https', 'mailto'],
    });
  }

  /**
   * Sanitizes plain text input
   * @param input - User input string
   * @returns Sanitized string
   */
  sanitizeText(input: string): string {
    if (!input) return '';

    // Remove script tags and event handlers
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/on\w+="[^"]*"/g, '')
      .replace(/on\w+='[^']*'/g, '')
      .replace(/javascript:/gi, '')
      .trim();
  }

  /**
   * Sanitizes object properties recursively
   * @param obj - Object to sanitize
   * @returns Sanitized object
   */
  sanitizeObject<T>(obj: T): T {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }

    const sanitized: any = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];

        if (typeof value === 'string') {
          sanitized[key] = this.sanitizeText(value);
        } else if (typeof value === 'object' && value !== null) {
          sanitized[key] = this.sanitizeObject(value);
        } else {
          sanitized[key] = value;
        }
      }
    }

    return sanitized as T;
  }
}
