import { IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput {
  @IsString()
  @Field(() => String, { nullable: false })
  title: string;

  @IsString()
  @Field(() => String, { nullable: true })
  slug?: string;

  @IsString()
  @Field(() => String, { nullable: false })
  description: string;

  @IsString()
  @Field(() => String, { nullable: true })
  metaTitle?: string;

  @IsString()
  @Field(() => String, { nullable: true })
  metaDescription?: string;

  @IsString()
  @Field(() => String, { nullable: true })
  keywords?: string;

  @IsString()
  @Field(() => String, { nullable: false })
  image: string;

  @IsString()
  @Field(() => String, { nullable: true })
  urlOrigin?: string;

  @Field(() => Boolean, { nullable: false })
  isMedium: boolean;

  @IsString()
  @Field(() => String, { nullable: false })
  content: string;

  @IsString()
  @Field(() => String, { nullable: false })
  authorId: string;

  @IsString()
  @Field(() => String, { nullable: true, defaultValue: 'en' })
  lang?: string;
}
