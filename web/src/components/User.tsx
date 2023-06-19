import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

import * as Separator from '@radix-ui/react-separator';
import IconLogout from '../assets/icons/IconLogout';
import Toggle from './Toggle';

export interface UserProps {
  variant: string;
}

const User = ({ variant }: UserProps) => {
  const { handleSignOut, user } = useContext(AuthContext);

  return (
    <>
      {variant === 'sm' && (
        <div className="flex items-center gap-3">
          <div className="px-2.25 py-px rounded-md text-xl font-medium dark:text-gray-200 text-gray-300 dark:bg-gray-500 bg-white-500/40">
            <span className="duration-40">{user.name?.charAt(0)}</span>
          </div>

          <div className="flex flex-col">
            <span className="block max-w-[175px] pt-0.5 font-semibold text-base dark:text-gray-100 text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
              {user.name}
            </span>
          </div>
        </div>
      )}

      {variant === 'md' && (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center gap-9 px-3 py-4 rounded-md dark:hover:bg-gray-500/50 hover:bg-white-600/60 cursor-default">
            <div className="flex items-center gap-3">
              <div className="flex px-2.25 py-0.75 rounded-md text-3xl font-medium dark:text-gray-200 text-gray-300 dark:bg-gray-500 bg-white-500/40">
                <span className="duration-40">{user.name?.charAt(0)}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold dark:text-gray-100 text-gray-400 text-start">
                  {user.name}
                </span>

                <span className="font-medium text-sm dark:text-gray-300 text-white-400 text-start">
                  {user.email}
                </span>
              </div>
            </div>

            <Toggle />
          </div>

          <Separator.Root
            className="dark:bg-gray-500 bg-white-600 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
            decorative
          />

          <button
            className="
              rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
              focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
            "
            onClick={() => handleSignOut()}
          >
            <div
              className="
                flex flex-row gap-2 px-5 py-2 rounded-md dark:active:bg-gray-500/30 active:bg-white-600 dark:hover:bg-gray-500/50 hover:bg-white-600/60
              "
            >
              <div className="flex items-center w-7 h-7">
                <IconLogout width="23" height="23" />
              </div>
              <span className="flex items-center font-int font-semibold text-2sm dark:text-gray-200 text-gray-300">
                Sair
              </span>
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default User;
