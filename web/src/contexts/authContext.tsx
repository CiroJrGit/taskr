import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';
import { api } from '../lib/api';
import cookies from 'js-cookie';
import decode from 'jwt-decode';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import {
  SignInProps,
  SignUpProps,
  UserProps,
  AuthProviderProps,
  AuthContextProps,
} from '../types/authProps';

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>({});
  const [loadingAuth, setLoadingAuth] = useState(false); //    loading de retorno do backend (spinner botão entrar)
  const [validateAuth, setValidateAuth] = useState(false); //  loading ao tentar logar (validação email e senha incorretos)
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!cookies.get('token'),
  );

  const navigate = useNavigate();

  useEffect(() => {
    function loadCookie() {
      const token = cookies.get('token');

      if (token) {
        setUser(decode(token));
      }
    }

    loadCookie();
  }, []);

  // Salvando cookie de sessão
  function handleSessionCookie(token: string) {
    cookies.set('token', token, { expires: 30 });
    setIsAuthenticated(true);
  }

  // Cadastrando usuario
  async function handleSignUp({ name, email, password }: SignUpProps) {
    setLoadingAuth(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const registerResponse = await api.post('/register', {
          id: userCredential.user.uid,
          name,
          email: userCredential.user.email,
        });

        const { token } = registerResponse.data;

        setUser(decode(token));
        handleSessionCookie(token);
        setLoadingAuth(false);
        navigate('/resume');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);

        setLoadingAuth(false);
      });
  }

  // Logando usuario
  async function handleSignIn({ email, password }: SignInProps) {
    setLoadingAuth(true);
    setValidateAuth(false);

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const loginResponse = await api.get(
          `/authenticate/${userCredential.user.uid}`,
        );

        const { token } = loginResponse.data;
        const { sub, name, email } = decode<UserProps>(token);

        const newUser: UserProps = {
          sub,
          name,
          email,
        };

        setUser(newUser);
        handleSessionCookie(token);
        setLoadingAuth(false);
        navigate('/resume');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);

        setValidateAuth(true);
        setLoadingAuth(false);
      });
  }

  // Deslogando usuario
  async function handleSignOut() {
    await signOut(auth)
      .then(() => {
        cookies.remove('token');

        setUser({});
        setIsAuthenticated(false);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingAuth,
        validateAuth,
        isAuthenticated,
        handleSignIn,
        handleSignUp,
        handleSignOut,
        setUser,
        setValidateAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
