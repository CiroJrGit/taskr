import { useState } from 'react';
import clsx from 'clsx';

import FormSignIn from '../AuthPage/components/FormSignIn';
import FormSignUp from '../AuthPage/components/FormSignUp';
import logo from '../../assets/logo.svg';

import { AnimatePresence, motion } from 'framer-motion';

const SignIn = () => {
  const [signIn, setSignIn] = useState(true);

  const signin = {
    from: { x: 50, opacity: 0 },
    to: { x: 0, opacity: 1, transition: { duration: 0.75 } },
  };

  const signup = {
    from: { x: -50, opacity: 0 },
    to: { x: 0, opacity: 1, transition: { duration: 0.75 } },
  };

  function handdleFormAuth() {
    setSignIn(!signIn);
  }

  return (
    <div className="relative flex items-center max-w-7xl max-h-[928px] my-20 rounded-lg bg-gray-800 drop-shadow-lg">
      {/* SignIn */}
      <div className="w-[736px] pl-[115px] pr-[88px]">
        <AnimatePresence>
          {signIn && (
            <motion.div
              className="flex flex-col gap-20"
              variants={signin}
              initial="from"
              animate="to"
              exit={{ x: 50, opacity: 0, transition: { duration: 0.75 } }}
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-semibold text-gray-100">
                  Entre no [NameApp].
                </h1>
                <div>
                  <span className="text-base font-medium text-gray-300">
                    Não tem uma conta?{' '}
                  </span>
                  <span
                    className="text-base font-semibold text-blue-600 cursor-pointer hover:underline hover:underline-offset-2"
                    onClick={handdleFormAuth}
                  >
                    Cadastre-se.
                  </span>
                </div>
              </div>

              <FormSignIn />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SignUp */}
      <div className="w-[736px] pl-[88px] pr-[115px]">
        <AnimatePresence>
          {!signIn && (
            <motion.div
              className="flex flex-col gap-20"
              variants={signup}
              initial="from"
              animate="to"
              exit={{ x: -50, opacity: 0, transition: { duration: 0.75 } }}
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-semibold text-gray-100">
                  Crie uma nova conta.
                </h1>
                <div>
                  <span className="text-base font-medium text-gray-300">
                    Já possui uma conta?{' '}
                  </span>
                  <span
                    className="text-base font-semibold text-blue-600 cursor-pointer hover:underline hover:underline-offset-2"
                    onClick={handdleFormAuth}
                  >
                    Entre.
                  </span>
                </div>
              </div>

              <FormSignUp />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className={clsx(
          "absolute w-[614px] h-full bg-[url('../assets/img-landing.jpg')] bg-cover bg-center transition-all duration-[800ms] ease-in-out",
          {
            'left-0': !signIn,
            'left-[52%]': signIn,
          },
        )}
      >
        <div className="flex flex-col gap-64 p-12">
          <motion.img
            className="w-48"
            src={logo}
            alt="Logo da aplicação"
            initial={{ x: 50, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.75, delay: 0.75 },
            }}
          />

          <div className="flex flex-col gap-1">
            <motion.p
              className="font-semibold text-6xl tracking-[.020rem]"
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.75, delay: 1 },
              }}
            >
              Bem-vindo
              <span className="font-thin text-2xl"> ao</span>
            </motion.p>
            <motion.p
              className="font-semibold text-[5.25rem] leading-none tracking-[.020rem] text-blue-600"
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.75, delay: 1.25 },
              }}
            >
              Tasker
              <span className="font-light text-[5.25rem] text-blue-600">
                app
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
