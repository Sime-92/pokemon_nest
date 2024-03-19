import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Activar el ValidationPipe globalmente
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Solo valida las propiedades que tienen decoradores de validación
    transform: true, // Transforma el payload de entrada al tipo de objeto del DTO
    forbidNonWhitelisted: true, // Lanza un error si se reciben propiedades no esperadas
    transformOptions: {
      enableImplicitConversion: true, // Permite la conversión implícita de tipos
    },
  }));
  
  await app.listen(3000);
}
bootstrap();
