import { Global, Module } from '@nestjs/common';
import { config } from '../config';
import { InMemoryCache, RedisCache } from './impelements';

@Global()
@Module({
  providers: [
    {
      provide: 'CACHE',
      useFactory: () => {
        return config.redis.url
          ? new RedisCache(config.redis.url)
          : new InMemoryCache();
      },
    },
  ],
  exports: ['CACHE'],
})
export class CacheModule {}
