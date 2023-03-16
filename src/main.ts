/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  //4 - indica que o class-validator pode usar o mesmo recurso de resolução de dependencias que o nest possui e entao quando for criar o validator sabera exatamente onde buscar (referente ao que foi importado no constructor())
  useContainer(app.select(AppModule), { fallbackOnErrors: true }) // primeiro parametro refere-se a raiz do projeto, sendo que abaixo disso sera resolvido e o segundo parametro indica que se o nest nao conseguir resolver as dependencias sera utilizado o proprio container pra tentar resolver novamente.

  await app.listen(3000);
}
bootstrap();
