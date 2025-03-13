import { User } from '@/domain/users/entities/User';
import { Email } from '@/domain/users/value-objects/Email';
import { UserRepository } from '@/domain/users/repositories/UserRepository';
import { CreateUserDTO, UpdateUserDTO, UserResponseDTO } from '../dtos/UserDTO';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(dto: CreateUserDTO): Promise<UserResponseDTO> {
    // Verificar se já existe usuário com o mesmo email
    const existingUser = await this.userRepository.findByEmail(dto.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Criar usuário
    const email = new Email(dto.email);
    const user = new User({
      name: dto.name,
      email: email,
      password: dto.password // Em uma aplicação real, deveria ser hash da senha
    });

    await this.userRepository.create(user);

    return this.toUserResponseDTO(user);
  }

  async updateUser(dto: UpdateUserDTO): Promise<UserResponseDTO> {
    const user = await this.userRepository.findById(dto.id);
    if (!user) {
      throw new Error('User not found');
    }

    if (dto.name) {
      user.changeName(dto.name);
    }

    if (dto.email) {
      const email = new Email(dto.email);
      user.changeEmail(email);
    }

    await this.userRepository.update(user);

    return this.toUserResponseDTO(user);
  }

  async getAllUsers(): Promise<UserResponseDTO[]> {
    const users = await this.userRepository.findAll();
    return users.map(user => this.toUserResponseDTO(user));
  }

  async getUserById(id: string): Promise<UserResponseDTO | null> {
    const user = await this.userRepository.findById(id);
    if (!user) return null;
    return this.toUserResponseDTO(user);
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  private toUserResponseDTO(user: User): UserResponseDTO {
    return {
      id: user.getId,
      name: user.getName,
      email: user.getEmail.getValue(),
      createdAt: user.getCreatedAt,
      updatedAt: user.getUpdatedAt
    };
  }
}
