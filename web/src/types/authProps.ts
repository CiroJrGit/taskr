import { ReactNode } from 'react';

export interface SignInProps {
  email: string;
  password: string;
}

export interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface UserProps {
  sub?: string;
  name?: string;
  email?: string | null;
}

export interface AuthProps {
  user: UserProps;
  loadingAuth: boolean;
  validateAuth: boolean;
  isAuthenticated: boolean;
  handleSignIn: ({ email, password }: SignInProps) => Promise<void>;
  handleSignUp: ({ name, email, password }: SignUpProps) => void;
  handleSignOut: () => Promise<void>;
  setUser: object;
  setValidateAuth: any;
}

export interface TokenProps {
  sub: string;
  name: string;
  email: string;
  iat: number;
  exp: number;
}
