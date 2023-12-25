import { ArgsType, Field } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePostInput } from '../input/CreatePostInput';

@ArgsType()
class CreatePostArgs {
  @ValidateNested()
  @Type(() => CreatePostInput)
  @Field(() => CreatePostInput, { nullable: false })
  data!: CreatePostInput;
}

export { CreatePostArgs as CreatePostArgs };
