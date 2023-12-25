import { ArgsType, Field } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdatePostInput } from '../input/UpdatePostInput';

@ArgsType()
export class UpdatePostArgs {
  @ValidateNested()
  @Type(() => UpdatePostInput)
  @Field(() => UpdatePostInput, { nullable: false })
  data!: UpdatePostInput;
}
