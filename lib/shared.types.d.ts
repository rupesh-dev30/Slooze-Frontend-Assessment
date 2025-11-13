export interface RegisterUserParams {
  name: string;
  email: string;
  password: string;
  role?: string;
}

export interface LoginUserParams {
  email: string;
  password: string;
}