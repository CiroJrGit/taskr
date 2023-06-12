import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import {
  AuthProps,
  SignInProps,
  SignUpProps,
  AuthProviderProps,
} from '../types/authProps';

export const AuthContext = createContext<AuthProps>({} as AuthProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState({});
  const [loadingAuth, setLoadingAuth] = useState(false); //    loading de retorno do backend
  const [validateAuth, setValidateAuth] = useState(false); //  loading ao tentar logar (botao entrar)

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('tasker-userSystem'),
  );
  const navigate = useNavigate();

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem('tasker-userSystem');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        // setIsAuthenticated(true);
      }
    }

    loadStorage();
  }, []);

  // Salvando localStorage
  function handleStorageUser(data: any) {
    localStorage.setItem('tasker-userSystem', JSON.stringify(data));
    setIsAuthenticated(true);
  }

  // Delay de promisse
  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Logando usuario
  async function handleSignIn({ email, password }: SignInProps) {
    setLoadingAuth(true);
    setValidateAuth(false);

    await delay(700);
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // const uid = value.user.uid;

        // const userProfile = [chamada http para o backend aqui!]

        const data = {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
        };

        setUser(data);
        handleStorageUser(data);
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

  // Cadastrando usuario
  async function handleSignUp({ name, email, password }: SignUpProps) {
    setLoadingAuth(true);

    // await delay(650);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // const uid = value.user.uid;

        // const userProfile = [chamada http para o backend aqui!]

        const data = {
          uid: userCredential.user.uid,
          name,
          email: userCredential.user.email,
        };

        setUser(data);
        handleStorageUser(data);
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

  // Deslogando usuario
  async function handleSignOut() {
    await signOut(auth)
      .then(() => {
        localStorage.removeItem('tasker-userSystem');

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
