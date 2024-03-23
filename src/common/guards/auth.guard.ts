import { IRequest } from '@/common/typings/request';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { config } from '../config';
import { AuthType } from '../typings/manifest';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<IRequest>();

    const { type, authorization_type, verification_tokens } =
      config.server.auth;

    switch (type) {
      case AuthType.none:
        return true;
      case AuthType.service_http:
        if (authorization_type !== 'bearer') {
          throw new Error(
            `Unsupported authorization_type: ${authorization_type}`,
          );
        }
        const expectToken = verification_tokens['monkeys'];
        if (!expectToken) {
          throw new Error(`monkeys verification_token is empty`);
        }
        const headerToken = request.headers['authorization'];
        if (!headerToken) {
          throw new Error('authorization token is empty');
        }
        return headerToken.replace('Bearer ', '') === expectToken;
      default:
        throw new Error(`Unsupported auth.type: ${type}`);
    }
  }
}
