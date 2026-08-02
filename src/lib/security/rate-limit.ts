export interface RateLimitConfig {
  limit: number;
  windowMs: number;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetAt: number;
}

export interface RateLimiter {
  consume(key: string, config: RateLimitConfig): RateLimitResult;
}

interface WindowEntry {
  count: number;
  resetAt: number;
}

class InMemoryRateLimiter implements RateLimiter {
  private readonly store = new Map<string, WindowEntry>();

  consume(key: string, config: RateLimitConfig): RateLimitResult {
    const now = Date.now();
    const entry = this.store.get(key);

    if (!entry || now >= entry.resetAt) {
      const resetAt = now + config.windowMs;
      this.store.set(key, { count: 1, resetAt });
      return {
        success: true,
        limit: config.limit,
        remaining: config.limit - 1,
        resetAt,
      };
    }

    if (entry.count >= config.limit) {
      return {
        success: false,
        limit: config.limit,
        remaining: 0,
        resetAt: entry.resetAt,
      };
    }

    entry.count += 1;
    return {
      success: true,
      limit: config.limit,
      remaining: config.limit - entry.count,
      resetAt: entry.resetAt,
    };
  }
}

const inMemoryRateLimiter = new InMemoryRateLimiter();

function getRateLimiter(): RateLimiter {
  // Swap this implementation with Upstash Redis when scaling to multiple instances.
  return inMemoryRateLimiter;
}

export async function rateLimit(
  key: string,
  config: RateLimitConfig,
): Promise<RateLimitResult> {
  return getRateLimiter().consume(key, config);
}

export const QUOTE_FORM_RATE_LIMIT: RateLimitConfig = {
  limit: 5,
  windowMs: 10 * 60 * 1000,
};
