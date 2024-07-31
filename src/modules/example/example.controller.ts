import {
  MonkeyToolCategories,
  MonkeyToolDescription,
  MonkeyToolDisplayName,
  MonkeyToolIcon,
  MonkeyToolInput,
  MonkeyToolName,
  MonkeyToolOutput,
} from '@/common/decorators/monkey-block-api-extensions.decorator';
import { AuthGuard } from '@/common/guards/auth.guard';
import { IRequest } from '@/common/typings/request';
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AddTwoNumberDto } from './dto/req/add-two-number.dto';
import { NthPowerOfDto } from './dto/req/nth-power-of.dto';
import { ExampleService } from './example.service';

@Controller('example')
@UseGuards(new AuthGuard())
export class ExampleController {
  constructor(private readonly service: ExampleService) {}

  @Post('/add-two-number')
  @ApiOperation({
    summary: 'Add Two Numbers',
    description: 'Simply add tow numbers.',
  })
  @MonkeyToolName('add-tow-number')
  @MonkeyToolCategories(['math'])
  @MonkeyToolIcon('emoji:👧:#ceefc5')
  @MonkeyToolDisplayName({
    'zh-CN': '两个数字数字相机',
    'en-US': 'Add Two Numbers',
  })
  @MonkeyToolDescription({
    'zh-CN': '简单的两个数字相加',
    'en-US': 'Simply add tow numbers.',
  })
  @MonkeyToolInput([
    {
      name: 'numA',
      displayName: {
        'zh-CN': '数字 A',
        'en-US': 'Number A',
      },
      required: true,
      type: 'number',
    },
    {
      name: 'numB',
      displayName: {
        'zh-CN': '数字 B',
        'en-US': 'Number B',
      },
      required: true,
      type: 'number',
    },
  ])
  @MonkeyToolOutput([
    {
      name: 'result',
      displayName: {
        'zh-CN': '结果',
        'en-US': 'Result',
      },
      required: true,
      type: 'number',
    },
  ])
  public async addTwoNumber(
    @Req() req: IRequest,
    @Body() body: AddTwoNumberDto,
  ) {
    const { numA, numB } = body;
    return {
      result: this.service.addTwoNumber(numA, numB),
    };
  }

  @Post('/nth-power-of')
  @ApiOperation({
    summary: 'Calc Nth Power',
    description: 'Calc Nth Power, assumes may take a while ...',
  })
  @MonkeyToolName('nth-power-of')
  @MonkeyToolCategories(['math'])
  @MonkeyToolDisplayName({
    'zh-CN': 'N次方',
    'en-US': 'Nth Power',
  })
  @MonkeyToolDescription({
    'zh-CN': '计算N次方，可能需要一段时间...',
    'en-US': 'Calc Nth Power, assumes may take a while ...',
  })
  @MonkeyToolIcon('emoji:👧:#ceefc5')
  @MonkeyToolInput([
    {
      name: 'num',
      displayName: {
        'zh-CN': '数字',
        'en-US': 'Number',
      },
      required: true,
      type: 'number',
    },
    {
      name: 'n',
      displayName: {
        'zh-CN': 'N次方',
        'en-US': 'N',
      },
      required: true,
      type: 'number',
    },
  ])
  @MonkeyToolOutput([
    {
      name: 'result',
      displayName: {
        'zh-CN': '结果',
        'en-US': 'Result',
      },
      required: true,
      type: 'number',
    },
  ])
  public async nthPowerOf(@Body() body: NthPowerOfDto) {
    const { num, n } = body;
    return {
      result: this.service.nthPowerOf(num, n),
    };
  }
}
