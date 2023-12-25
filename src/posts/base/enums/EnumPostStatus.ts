import { registerEnumType } from '@nestjs/graphql';

export enum EnumPostStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
}

registerEnumType(EnumPostStatus, {
  name: 'EnumPostStatus',
});
