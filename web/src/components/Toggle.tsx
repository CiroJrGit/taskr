import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';
// import clsx from 'clsx';

import * as Switch from '@radix-ui/react-switch';

import { HiMoon } from 'react-icons/hi2';
import { IoMdSunny } from 'react-icons/io';
// import { RiSunFill } from 'react-icons/ri';

const Toggle = () => {
  // const [toggle, setToggle] = useState<boolean>(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Switch.Root
        className="
          flex items-center gap-1 rounded-lg border dark:bg-gray-800 bg-white-800 dark:border-gray-400 border-gray-300
          focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
          focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
        "
        defaultChecked={theme !== 'dark'}
        onCheckedChange={toggleTheme}
      >
        <div className="flex justify-center items-center pl-0.5 w-9 h-9 rounded-md">
          <HiMoon className="dark:text-gray-800 text-gray-300" />
        </div>
        <div className="flex justify-center items-center pr-0.5 w-9 h-9 rounded-md">
          <IoMdSunny className="dark:text-gray-100 text-white-800" />
        </div>
        <Switch.Thumb
          className="
            absolute flex justify-center items-center w-9 h-8 rounded-md dark:bg-gray-500 bg-white-500
            translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[38px] transition-transform ease-in-out duration-300
          "
        >
          {theme === 'light' ? (
            <IoMdSunny className="text-white-900" />
          ) : (
            <HiMoon className="text-gray-100" />
          )}
        </Switch.Thumb>
      </Switch.Root>
    </>
  );
};

export default Toggle;

/* <button
  className="flex items-center gap-1 p-0.5 rounded-lg border border-gray-400 bg-gray-800"
  onClick={handleToggle}
>
  <div
    className={clsx(
      'flex justify-center items-center w-9 h-7 rounded-md',
      {
        'bg-gray-500': !toggle,
        'bg-gray-800': toggle,
      },
    )}
  >
    <HiMoon className="text-gray-100" />
  </div>
  <div
    className={clsx(
      'flex justify-center items-center w-9 h-7 rounded-md',
      {
        'bg-gray-500': toggle,
        'bg-gray-800': !toggle,
      },
    )}
  >
    <IoMdSunny className="text-gray-100" />
  </div>
</button>; */

/* <button
        className="flex flex-col items-center gap-1 p-0.5 rounded-lg border border-gray-400 bg-gray-800"
        onClick={handleToggle}
      >
        <div
          className={clsx(
            'flex justify-center items-center w-7 h-7 rounded-md',
            {
              'bg-gray-500': !toggle,
              'bg-gray-800': toggle,
            },
          )}
        >
          <HiMoon className="text-gray-100" />
        </div>
        <div
          className={clsx(
            'flex justify-center items-center w-7 h-7 rounded-md',
            {
              'bg-gray-500': toggle,
              'bg-gray-800': !toggle,
            },
          )}
        >
          <IoMdSunny className="text-gray-100" />
        </div>
      </button> */
