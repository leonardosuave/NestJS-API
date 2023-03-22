import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { productModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, productModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
