import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/post.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Tag {
  @Field(() => ID)
  id: string;

  @Field()
  name!: string;

  @Field(() => [Post], { nullable: 'items' })
  posts?: Post[];
}
