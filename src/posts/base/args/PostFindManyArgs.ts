import { ArgsType, Field } from '@nestjs/graphql';
import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PostWhereInput } from '../input/PostWhereInput';
import { PostOrderByInput } from '../input/PostOrderByInput';
import { FindManyArgs } from 'bune-common';

@ArgsType()
export class PostFindManyArgs extends FindManyArgs {
  @IsOptional()
  @ValidateNested()
  @Field(() => PostWhereInput, { nullable: true })
  @Type(() => PostWhereInput)
  where?: PostWhereInput;

  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PostOrderByInput], { nullable: true })
  @Type(() => PostOrderByInput)
  orderBy?: Array<PostOrderByInput>;
}
