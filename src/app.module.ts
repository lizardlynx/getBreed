import { Module } from '@nestjs/common';
import { HttpModule } from 'nestjs-http-promise';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
