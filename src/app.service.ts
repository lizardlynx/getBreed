import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { forkJoin, Observable, map } from 'rxjs';


interface Breed {
  id: string;
  name: string;
  dog_friendly: number;
}
@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService, private configService: ConfigService) {}

  private urls = {
    'Liza': 'https://3499-212-90-60-240.ngrok.io/',
    //'Lidiia': '',
    'Ivan': 'http://f0a2-193-161-14-38.ngrok.io/',
    'Nikita': 'https://3d18-188-163-73-40.ngrok.io',
    'Oleg': 'http://bd4e-188-163-101-228.ngrok.io'
  }

  /*async getBreed(breed: string): Promise<Breed[]> {
    return await this.httpService.get<any>(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`).then((res) => res.data);
  }*/

  getAll(): Observable<any> {
    const obj = {};
    for (let i in this.urls) {
      console.log(i, this.urls[i]);
      obj[i] = this.httpService.get(this.urls[i]).pipe(map((response) => response.data));
    }
    const requests: any = forkJoin(obj);
    return requests;
  }
}
