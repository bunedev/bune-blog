import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsEnum } from 'class-validator';
import { SortOrder } from 'bune-common';

@InputType()
export class PostOrderByInput {
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  deletedAt?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  createdAt?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  updatedAt?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  title?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  description?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  slug?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  metaTitle?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  metaDescription?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  keywords?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  id?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  lastName?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  likes?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  views?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  readingTime?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  isMedium?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  status?: SortOrder;

  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  authorId?: SortOrder;
}
