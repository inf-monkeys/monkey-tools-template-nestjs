import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from './common/cache/cache.module';
import { LockModule } from './common/lock/lock.module';
import { CommonMiddleware } from './common/middlewares/common.middleware';
import { ExampleModule } from './modules/example/example.module';

@Module({
  imports: [CacheModule, LockModule, ExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CommonMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
