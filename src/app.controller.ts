import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/anime')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/jojo')
  getJoJo(): string {
    return this.appService.getJoJo();
  }

  @Get('/bleach')
  getBleach(): string {
    return this.appService.getBleach();
  }
}
