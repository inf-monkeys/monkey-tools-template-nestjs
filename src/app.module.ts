import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from './common/cache/cache.module';
import { LockModule } from './common/lock/lock.module';
import { ExampleModule } from './modules/example/example.module';

@Module({
  imports: [CacheModule, LockModule, ExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
