import { ArgsType, Field } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PostWhereUniqueInput } from '../input/PostWhereUniqueInput';

@ArgsType()
export class PostFindUniqueArgs {
  @ValidateNested()
  @Type(() => PostWhereUniqueInput)
  @Field(() => PostWhereUniqueInput, { nullable: false })
  where!: PostWhereUniqueInput;
}
