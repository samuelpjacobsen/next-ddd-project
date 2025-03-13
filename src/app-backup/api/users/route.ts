import { NextRequest, NextResponse } from 'next/server';
import { UserService } from '@/application/users/services/UserService';
import { PrismaUserRepository } from '@/infrastructure/repositories/PrismaUserRepository';
import { CreateUserDTO, UpdateUserDTO } from '@/application/users/dtos/UserDTO';

// Inicializar as dependências
const userRepository = new PrismaUserRepository();
const userService = new UserService(userRepository);

export async function GET(request: NextRequest) {
  try {
    // Verificar se há um ID na rota para obter um usuário específico
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (id) {
      const user = await userService.getUserById(id);
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
      return NextResponse.json(user);
    }

    // Caso contrário, retornar todos os usuários
    const users = await userService.getAllUsers();
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userDTO: CreateUserDTO = {
      name: body.name,
      email: body.email,
      password: body.password
    };

    const user = await userService.createUser(userDTO);
    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const userDTO: UpdateUserDTO = {
      id: body.id,
      name: body.name,
      email: body.email
    };

    const user = await userService.updateUser(userDTO);
    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    await userService.deleteUser(id);
    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
