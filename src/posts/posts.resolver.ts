import {
  Resolver,
  Query,
  Args,
  ResolveReference,
  Mutation,
} from '@nestjs/graphql';
import { Post } from './post.entity';
import { PostsService } from './posts.service';
import { CreatePostArgs } from './base/args/CreatePostArgs';
import { PostFindUniqueArgs } from './base/args/PostFindUniqueArgs';
import { UpdatePostArgs } from './base/args/UpdatePostArgs';
import {
  ErrorCodes,
  ErrorMessages,
  IsRecordNotFoundError,
  createGraphQLError,
} from 'bune-common';
import { HttpStatus } from '@nestjs/common';
import { DeletePostArgs } from './base/args/DeletePostArgs';
import { PostFindManyArgs } from './base/args/PostFindManyArgs';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => Post)
  async getPost(@Args() args: PostFindUniqueArgs): Promise<Post> {
    return await this.postsService.findOne(args);
  }

  async posts(@Args() args: PostFindManyArgs): Promise<Post[]> {
    return this.postsService.findMany(args);
  }

  @Mutation(() => Post)
  async createPost(@Args() args: CreatePostArgs): Promise<Post> {
    return await this.postsService.create(args);
  }

  @Mutation(() => Post)
  async updatePost(@Args() args: UpdatePostArgs): Promise<Post> {
    try {
      return await this.postsService.create(args);
    } catch (error) {
      if (IsRecordNotFoundError(error)) {
        throw createGraphQLError(
          HttpStatus.BAD_REQUEST,
          ErrorMessages.PostNotFound,
          ErrorCodes.PostNotFound,
        );
      }
      throw error;
    }
  }

  @Mutation(() => Post)
  async deletePost(@Args() args: DeletePostArgs): Promise<Post> {
    try {
      return await this.postsService.delete(args);
    } catch (error) {
      if (IsRecordNotFoundError(error)) {
        throw createGraphQLError(
          HttpStatus.BAD_REQUEST,
          ErrorMessages.PostNotFound,
          ErrorCodes.PostNotFound,
        );
      }
      throw error;
    }
  }

  @ResolveReference()
  async resolveReference(reference: {
    __typename: string;
    id: string;
  }): Promise<Post> {
    return await this.postsService.findById(reference.id);
  }
}
