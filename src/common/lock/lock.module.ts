import { Global, Module } from '@nestjs/common';
import { config } from '../config';
import { InMemoryLockManager, RedisLockManager } from './impelements';

@Global()
@Module({
  providers: [
    {
      provide: 'LOCK',
      useFactory: () => {
        return config.redis.url
          ? new RedisLockManager(config.redis.url)
          : new InMemoryLockManager();
      },
    },
  ],
  exports: ['LOCK'],
})
export class LockModule {}
