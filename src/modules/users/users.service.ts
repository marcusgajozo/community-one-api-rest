import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<UserEntity> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });

      if (!user) {
        throw new NotFoundException('User not found');
      }

      return user;
    } catch {
      throw new NotFoundException('User not found');
    }
  }

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userAlreadyExists = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (userAlreadyExists) {
      throw new ConflictException('User already exists');
    }

    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async update(
    id: string,
    updateUserDto: Partial<CreateUserDto>,
  ): Promise<UserEntity> {
    const user = await this.findOne(id);

    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }
}
