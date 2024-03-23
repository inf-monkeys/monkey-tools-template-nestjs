import { CacheModule } from '@/common/cache/cache.module';
import { LockModule } from '@/common/lock/lock.module';
import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

@Module({
  controllers: [ExampleController],
  providers: [ExampleService],
  imports: [CacheModule, LockModule],
})
export class ExampleModule {}
