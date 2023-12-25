import { Directive, Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Category } from 'src/categories/category.entity';
import { Comment } from 'src/comments/comment.entity';
import { Tag } from 'src/tags/tag.entity';
import { EnumPostStatus } from './base/enums/EnumPostStatus';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field(() => ID)
  id: string;

  @Field()
  title!: string;

  @Field({ nullable: true })
  slug?: string;

  @Field()
  description!: string;

  @Field({ nullable: true })
  metaTitle?: string;

  @Field({ nullable: true })
  metaDescription?: string;

  @Field({ nullable: true })
  keywords?: string;

  @Field()
  image!: string;

  @Field({ nullable: true })
  urlOrigin?: string;

  @Field()
  isMedium!: boolean;

  @Field()
  content!: string;

  @Field()
  authorId!: string;

  @Field({ nullable: true, defaultValue: 'en' })
  lang?: string;

  @Field(() => [Comment])
  comments?: Comment[];

  @Field(() => [Category])
  categories?: Category[];

  @Field(() => [Tag])
  tags?: Tag[];

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  likes?: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  views?: number;

  @Field(() => Int, { nullable: true })
  readingTime?: number;

  @Field(() => EnumPostStatus, { defaultValue: EnumPostStatus.DRAFT })
  status?: EnumPostStatus;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
