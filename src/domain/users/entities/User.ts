import { Email } from '../value-objects/Email';

export interface UserProps {
  id?: string;
  name: string;
  email: Email;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User {
  private readonly id: string;
  private name: string;
  private email: Email;
  private password: string;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(props: UserProps) {
    this.id = props.id || crypto.randomUUID();
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt || new Date();
  }

  get getId(): string {
    return this.id;
  }

  get getName(): string {
    return this.name;
  }

  get getEmail(): Email {
    return this.email;
  }

  get getCreatedAt(): Date {
    return this.createdAt;
  }

  get getUpdatedAt(): Date {
    return this.updatedAt;
  }

  changeName(name: string): void {
    this.name = name;
    this.updatedAt = new Date();
  }

  changeEmail(email: Email): void {
    this.email = email;
    this.updatedAt = new Date();
  }

  // Métodos para representar o usuário
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email.getValue(),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
