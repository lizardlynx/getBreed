import { Injectable } from '@nestjs/common';
import { HttpService } from 'nestjs-http-promise';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getBreed(breed: string): Promise<any> {
    return await this.httpService.get<any>(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`).then((res) => res.data);
  }
}
