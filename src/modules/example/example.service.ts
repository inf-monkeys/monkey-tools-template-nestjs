import { CacheManager } from '@/common/cache/impelements';
import { LockManager } from '@/common/lock/impelements';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  constructor(
    @Inject('CACHE') private readonly cacheManager: CacheManager,
    @Inject('LOCK') private readonly lockManager: LockManager,
  ) {}

  public addTwoNumber(numA: number, numB: number) {
    return numA + numB;
  }

  public nthPowerOf(num: number, n: number) {
    return Math.pow(num, n);
  }
}
