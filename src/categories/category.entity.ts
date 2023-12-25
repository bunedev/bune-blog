import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/post.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Category {
  @Field(() => ID)
  id: string;

  @Field()
  name!: string;

  @Field(() => [Post], { nullable: 'items' })
  posts?: Post[];

  @Field(() => Category, { nullable: true })
  parent?: Category;

  @Field(() => [Category], { nullable: 'items' })
  children?: Category[];
}
