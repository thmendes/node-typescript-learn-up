import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Id } from './models/id';
import { Message } from './models/message';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getMessage(@Param() params: Id): string {
    return 'Return message';
  }

  @Post()
  sendMessage(@Body() message: Message){
    return 'Message was sent.'
  }
}
