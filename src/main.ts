import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply the exception filter globally
  app.useGlobalFilters(new GqlAllExceptionsFilter());
  await app.listen(Bun.env.APP_PORT || 9697);
}
bootstrap();
