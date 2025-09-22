import { DataSource } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { Provider } from '@nestjs/common';

export const usersProviders: Provider[] = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserEntity),
    inject: ['DATA_SOURCE'],
  },
];
