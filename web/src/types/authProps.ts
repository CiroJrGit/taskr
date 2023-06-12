import { ReactNode } from 'react';

export interface AuthProps {
  user: object;
  loadingAuth: boolean;
  validateAuth: boolean;
  isAuthenticated: boolean;
  handleSignIn: ({ email, password }: SignInProps) => Promise<void>;
  handleSignUp: ({ name, email, password }: SignUpProps) => void;
  handleSignOut: () => Promise<void>;
  setUser: any;
  setValidateAuth: any;
}

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
