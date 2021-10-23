import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInfo(): string {
    return 'Hello! Insert into the link "/" and breed (or part of the breed word), that you want to search for!'
  }

  @Get(':breed')
  async getBreed(@Param('breed') breed: string): Promise<any> {
    return await this.appService.getBreed(breed);
  }
}
