import { useContext } from 'react';
import * as Separator from '@radix-ui/react-separator';
import clsx from 'clsx';
import { TaskListContext } from '../contexts/tasklistsContext';
import IconBack from '../assets/icons/IconBack';
import IconTrash from '../assets/icons/IconTrash';

const Trash = () => {
  const { lists, handleDeleteTaskList, handleEditTaskList } =
    useContext(TaskListContext);

  return (
    <>
      <span className="font-medium text-3xs dark:text-gray-300 text-white-500">
        Lista de tarefas na lixeira
      </span>

      <Separator.Root
        className="mt-1 dark:bg-gray-500 bg-white-600 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
        decorative
      />

      <div className="flex flex-col gap-1 mt-3">
        {lists
          .filter((list) => list.deleted === true)
          .map((list) => (
            <div
              key={list.id}
              className="
                rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 
                focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 focus-visible:ring-offset-white-800 cursor-pointer
              "
            >
              <div className="relative flex justify-between items-center gap-3 pl-5 pr-1 py-2 rounded-md dark:hover:bg-gray-500/60 hover:bg-white-600/80 dark:active:bg-gray-500/40 active:bg-white-600">
                <>
                  <span
                    className={clsx(
                      'block absolute w-2.25 h-2.25 left-0 rounded-sm transition-all duration-150',
                      {
                        'bg-main-blue': list.color === '#265EED',
                        'bg-main-purple': list.color === '#8029EE',
                        'bg-main-pink': list.color === '#EE29B7',
                        'bg-main-red': list.color === '#F4385A',
                        'bg-main-yellow': list.color === '#EE9329',
                        'bg-main-green': list.color === '#29EE9B',
                      },
                    )}
                    aria-hidden="true"
                  ></span>
                  <span className="font-int font-medium text-2sm dark:text-gray-200 text-gray-300">
                    {list.title}
                  </span>
                </>
                <div className="flex gap-2">
                  <button
                    className="rounded-md px-0.5 py-1 dark:hover:bg-gray-400 hover:bg-white-500/40 dark:active:bg-gray-500/80 active:bg-white-500/60"
                    onClick={() =>
                      handleEditTaskList(list.id, list.title, list.color, false)
                    }
                  >
                    <IconBack width="21" height="17" stroke="1.5" />
                  </button>
                  <button
                    className="rounded-md px-0.5 py-1 dark:hover:bg-gray-400 hover:bg-white-500/40 dark:active:bg-gray-500/80 active:bg-white-500/60"
                    onClick={() => handleDeleteTaskList(list.id)}
                  >
                    <IconTrash width="22" height="18" stroke="1.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Trash;
