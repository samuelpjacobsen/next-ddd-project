export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserDTO {
  id: string;
  name?: string;
  email?: string;
}

export interface UserResponseDTO {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
