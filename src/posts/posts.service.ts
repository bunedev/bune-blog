import { HttpStatus, Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { ErrorCodes, ErrorMessages } from 'src/common/constants/errors';
import { createGraphQLError } from 'bune-common';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(protected readonly prisma: PrismaService) {}

  async findMany<T extends Prisma.PostFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostFindManyArgs>,
  ): Promise<Post[]> {
    const result = await this.prisma.post.findMany(args);
    return result as Post[];
  }

  async findById(id: string): Promise<Post> {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) {
      throw createGraphQLError(
        HttpStatus.BAD_REQUEST,
        ErrorMessages.PostNotFound,
        ErrorCodes.PostNotFound,
      );
    }
    return post as Post;
  }

  async findOne<T extends Prisma.PostFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostFindUniqueArgs>,
  ): Promise<Post | null> {
    const post = await this.prisma.post.findUnique(args);
    return post as Post;
  }

  async create<T extends Prisma.PostCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostCreateArgs>,
  ): Promise<Post> {
    const post = await this.prisma.post.create<T>({
      ...args,
      data: {
        ...args.data,
      },
    });
    return post as Post;
  }

  async update<T extends Prisma.PostUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostUpdateArgs>,
  ): Promise<Post> {
    const post = await this.prisma.post.update<T>({
      ...args,
      data: {
        ...args.data,
      },
    });
    return post as Post;
  }

  async delete<T extends Prisma.PostDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostDeleteArgs>,
  ): Promise<Post> {
    const post = await this.prisma.post.delete(args);
    return post as Post;
  }
}
