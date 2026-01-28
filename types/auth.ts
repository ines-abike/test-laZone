export interface LoginValues {
  email: string;
  password: string;
}

export interface RegisterValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface StrapiUser {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface StrapiResponse {
  jwt: string;
  user: StrapiUser;
}

export interface StrapiError {
  status: number;
  name: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface StrapiErrorResponse {
  error?: StrapiError;
  message?: string | string[];
}

export interface Result {
  success: boolean;
  data?: StrapiResponse;
  error?: string;
}
