import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsOptional, IsEnum } from 'class-validator';
import { EnumPostStatus } from '../enums/EnumPostStatus';
import {
  BooleanFilter,
  DateTimeFilter,
  DateTimeNullableFilter,
  IntNullableFilter,
  StringFilter,
  StringNullableFilter,
} from 'bune-common';

@InputType()
export class PostWhereInput {
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  deletedAt?: DateTimeNullableFilter;

  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;

  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  title?: StringFilter;

  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  description?: StringFilter;

  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  slug?: StringNullableFilter;

  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  metaTitle?: StringNullableFilter;

  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  metaDescription?: StringNullableFilter;

  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  keywords?: StringNullableFilter;

  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  likes?: IntNullableFilter;

  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  views?: IntNullableFilter;

  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  readingTime?: IntNullableFilter;

  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isMedium?: BooleanFilter;

  @IsEnum(EnumPostStatus)
  @IsOptional()
  @Field(() => EnumPostStatus, {
    nullable: true,
  })
  status?:
    | EnumPostStatus.ARCHIVED
    | EnumPostStatus.DRAFT
    | EnumPostStatus.PUBLISHED;

  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  authorId?: StringFilter;
}
