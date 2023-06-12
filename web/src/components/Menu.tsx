import { NavLink } from 'react-router-dom';

import * as Popover from '@radix-ui/react-popover';
import User from './User';

import IconResume from '../assets/icons/IconResume';
// import IconSettings from '../assets/icons/IconSettings';
import IconTrash from '../assets/icons/IconTrash';
import { IoEllipsisHorizontal } from 'react-icons/io5';

const components = () => {
  return (
    <nav className="flex flex-col gap-2">
      <Popover.Root>
        <Popover.Trigger
          className="
            flex justify-between items-center px-3 py-3 rounded-md dark:hover:bg-gray-600 hover:bg-white-700 dark:active:bg-gray-700 active:bg-white-600/80
            focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
            focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 focus-visible:ring-offset-white-800
          "
        >
          <User variant="sm" />
          <div className="flex items-center">
            <IoEllipsisHorizontal className="text-2xl dark:text-gray-300 text-white-500" />
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            <div className="left-4 min-w-[300px] mt-1.5 ml-4 px-1.5 py-2 rounded-lg dark:bg-gray-600 bg-white-700 drop-shadow-md">
              <User variant="md" />
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <div className="flex flex-col gap-1">
        <NavLink
          to="/resume"
          className="
            rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
            focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 focus-visible:ring-offset-white-800 group
          "
        >
          <div
            className="
              flex flex-row gap-2 px-4.5 py-2 rounded-md dark:hover:bg-gray-600 hover:bg-white-700 dark:active:bg-gray-700 active:bg-white-600/80
              dark:group-[.active]:bg-gray-600 group-[.active]:bg-white-700 dark:group-[.active]:active:bg-gray-700 group-[.active]:active:bg-white-600/80
            "
          >
            <div className="flex items-center w-7 h-7">
              <IconResume width="23" height="23" />
            </div>
            <span className="flex items-center pt-0.5 font-int font-semibold text-2sm dark:text-gray-200 text-gray-300">
              Minhas Listas
            </span>
          </div>
        </NavLink>

        <Popover.Root>
          <Popover.Trigger
            className="
              flex flex-row gap-2 px-4.5 py-2 rounded-md dark:hover:bg-gray-600 hover:bg-white-700 dark:active:bg-gray-700 active:bg-white-600/80
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
              focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 focus-visible:ring-offset-white-800
            "
          >
            <div className="flex items-center w-7 h-7">
              <IconTrash width="23" height="19" stroke="1.6" />
            </div>
            <span className="flex items-center pt-0.5 font-int font-semibold text-2sm dark:text-gray-200 text-gray-300">
              Lixeira
            </span>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="focus:outline-none">
              <div
                className="
                  left-4 w-80 h-40 mt-1.5 ml-4 px-1 py-3 rounded-lg dark:text-gray-200 text-gray-300
                  dark:bg-gray-600 bg-white-700 drop-shadow-md
                "
              >
                <span>teste!</span>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </nav>
  );
};

export default components;
