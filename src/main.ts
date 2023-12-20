import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GqlAllExceptionsFilter, GqlValidationPipe } from 'bune-common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new GqlAllExceptionsFilter());
  app.useGlobalPipes(new GqlValidationPipe());

  await app.listen(Bun.env.APP_PORT || 9698);
}
bootstrap();
