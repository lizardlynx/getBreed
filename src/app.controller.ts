import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

interface Breed {
  id: string;
  name: string;
  dog_friendly: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInfo(): string {
    return 'Liza!!!';
  }

  @Get('/getAll')
  getAll(): Observable<any> {
    return this.appService.getAll();
  }

  /*@Get(':breed')
  async getBreed(@Param('breed') breed: string): Promise<Breed[]> {
    return await this.appService.getBreed(breed);
  }*/
}
