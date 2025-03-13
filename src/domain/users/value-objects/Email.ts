export class Email {
  private readonly value: string;

  constructor(email: string) {
    this.validate(email);
    this.value = email;
  }

  private validate(email: string): void {
    if (!email) {
      throw new Error('Email is required');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }
  }

  getValue(): string {
    return this.value;
  }

  equals(email: Email): boolean {
    return this.value === email.value;
  }
}
