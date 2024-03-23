import { Controller, Get } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { config } from './common/config';
import {
  ApiType,
  ManifestJson,
  SchemaVersion,
} from './common/typings/manifest';

@Controller()
export class AppController {
  constructor() {}

  @Get('/healthz')
  public async healthz() {
    return {
      status: 'OK',
    };
  }

  @Get('/manifest.json')
  @ApiExcludeEndpoint()
  public getManifestJson(): ManifestJson {
    return {
      schema_version: SchemaVersion.v1,
      display_name: 'ComfyUI',
      namespace: 'monkeys_tool_template_for_nestjs',
      auth: config.server.auth,
      api: {
        type: ApiType.openapi,
        url: `/openapi-json`,
      },
      contact_email: 'dev@inf-monkeys.com',
    };
  }
}
