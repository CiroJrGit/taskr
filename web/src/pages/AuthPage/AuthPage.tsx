import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import clsx from 'clsx';

import FormSignIn from './components/FormSignIn';
import FormSignUp from './components/FormSignUp';
import logo from '../../assets/logo.svg';
import { motion } from 'framer-motion';

const SignIn = () => {
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);

  const [visibleIn, setVisibleIn] = useState(true);
  const [visibleUp, setVisibleUp] = useState(false);

  const [loadComponent, setLoadComponent] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const load = {
    from: { opacity: 0 },
    to: { opacity: 1, transition: { duration: 0.2 } },
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/resume');
    }

    setTimeout(() => {
      setLoadComponent(true);
    }, 150);

    // const timeoutId = setTimeout(() => {
    //   setLoadComponent(true);
    // }, 150);

    // return () => {
    //   clearTimeout(timeoutId);
    // };
  }, [isAuthenticated, navigate]);

  function handleSignIn() {
    setSignIn(false);
    setSignUp(true);
    setVisibleUp(true);

    setTimeout(() => {
      setVisibleIn(false);
    }, 300);
  }

  function handleSignUp() {
    setSignIn(true);
    setSignUp(false);
    setVisibleIn(true);

    setTimeout(() => {
      setVisibleUp(false);
    }, 700);
  }

  return (
    <>
      {loadComponent && (
        <motion.div
          className={clsx(
            'relative flex flex-col items-center w-[672px] my-auto pt-28 rounded-lg dark:bg-gray-800 bg-white-800 drop-shadow-lg transition-all duration-600 ease-in-out overflow-hidden',
            {
              'min-h-[792px]': signIn,
              'min-h-[872px]': signUp,
            },
          )}
          variants={load}
          initial="from"
          animate="to"
        >
          <div className="flex flex-col justify-center items-center">
            <img className="w-80" src={logo} alt="Logo" />
          </div>

          <div
            className={clsx(
              'absolute bottom-0 flex items-center transition-all duration-600 ease-in-out',
              {
                'translate-x-1/4 py-8': signIn,
                '-translate-x-1/4 py-16': signUp,
              },
            )}
          >
            {/* SignIn */}
            <div className="flex flex-col justify-center w-[672px] px-28">
              <div className="flex flex-col gap-8">
                <div className="flex justify-center">
                  <span className="text-lg font-normal dark:text-gray-100 text-gray-500">
                    Entre no Tasker
                  </span>
                </div>

                {visibleIn && (
                  <>
                    <FormSignIn />

                    <div className="flex justify-center mt-4">
                      <span className="pr-1 text-base font-medium dark:text-gray-300 text-white-500">
                        Não tem uma conta?
                      </span>
                      <button
                        className="text-base font-semibold text-blue-600 cursor-pointer hover:underline hover:underline-offset-2 focus:outline-none focus:underline"
                        onClick={handleSignIn}
                      >
                        Cadastre-se.
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* SignUp */}
            <div className="flex flex-col justify-center w-[672px] min-h-[583px] px-28">
              <div className="flex flex-col gap-8">
                <div className="flex justify-center">
                  <span className="text-lg font-normal dark:text-gray-100 text-gray-500">
                    Crie uma nova conta
                  </span>
                </div>

                {visibleUp && (
                  <>
                    <FormSignUp />

                    <div className="flex justify-center mt-2">
                      <span className="pr-1 text-base font-medium dark:text-gray-300 text-white-500">
                        Já possui uma conta?
                      </span>
                      <button
                        className="text-base font-semibold text-blue-600 cursor-pointer hover:underline hover:underline-offset-2 focus:outline-none focus:underline"
                        onClick={handleSignUp}
                      >
                        Entre.
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SignIn;
