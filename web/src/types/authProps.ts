import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface SignInProps {
  email: string;
  password: string;
}

export interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

export interface UserProps {
  sub?: string;
  name?: string;
  email?: string | null;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextProps {
  user: UserProps;
  loadingAuth: boolean;
  validateAuth: boolean;
  isAuthenticated: boolean;
  handleSignIn: ({ email, password }: SignInProps) => Promise<void>;
  handleSignUp: ({ name, email, password }: SignUpProps) => void;
  handleSignOut: () => Promise<void>;
  setUser: Dispatch<SetStateAction<UserProps>>;
  setValidateAuth: Dispatch<SetStateAction<boolean>>;
}
