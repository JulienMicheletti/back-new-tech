import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  const options = new DocumentBuilder()
    .setTitle('Documentaton API')
    .setDescription(`Documentation de l'API du projet de technologies du web`)
    .setVersion('1.0')
    .addTag('web')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('documentation', app, document);
  await app.listen(3000);

  Logger.log(`Application served at http://localhost:3000`, 'bootstrap');
  Logger.log(`Application documentation at http://localhost:3000/documentation`, 'bootstrap');
}

bootstrap();
