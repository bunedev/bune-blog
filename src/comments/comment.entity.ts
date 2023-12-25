import { Directive, Field, ID, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Comment {
  @Field(() => ID)
  id: string;

  @Field()
  content!: string;

  @Field()
  authorId!: string;

  @Field(() => ID)
  postId!: string;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  likes?: number;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => Comment, { nullable: true })
  parent?: Comment;

  @Field(() => [Comment], { nullable: 'items' })
  children?: Comment[];
}
