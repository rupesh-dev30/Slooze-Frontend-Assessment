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

export interface ProductInput {
  name: string;
  price: number;
  image?: string;
  views?: number;
  revenue?: number;
  status?: "published" | "draft";
}

export interface ProductDocument {
  _id: string;
  user: string;
  name: string;
  price: number;
  image: string;
  views: number;
  revenue: number;
  status: "published" | "draft";
  createdAt: string;
  updatedAt: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  status?: "published" | "draft";
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  total?: number;
  page?: number;
  limit?: number;
}
