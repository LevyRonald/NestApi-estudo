import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27018/banco'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
