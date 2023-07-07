import { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { TaskListContext } from '../contexts/tasklistsContext';
import clsx from 'clsx';

const ListGroup = () => {
  const { lists, loadLists } = useContext(TaskListContext);

  useEffect(() => {
    loadLists();
  }, []);

  return (
    <nav className="space-y-4 px-3 py-4">
      <span className="font-semibold dark:text-gray-300 text-white-500">
        Listas
      </span>

      <div className="flex flex-col gap-1">
        {lists
          .filter((list) => list.deleted === false)
          .map((list) => (
            <NavLink
              key={list.id}
              to={`/tasklist/${list.id}`}
              className="
                rounded-md focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 
                focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 focus-visible:ring-offset-white-800 group
              "
            >
              <div
                className="
                  relative flex items-center gap-3 px-5 py-2 rounded-md dark:hover:bg-gray-600 hover:bg-white-700 dark:active:bg-gray-700 active:bg-white-600/80 
                  dark:group-[.active]:bg-gray-600 group-[.active]:bg-white-700 dark:group-[.active]:active:bg-gray-700 group-[.active]:active:bg-white-600/80
                "
              >
                <span
                  className={clsx(
                    'block absolute w-2.25 h-2.25 left-0 rounded-sm group-[.active]:w-[7px] group-[.active]:h-4.5 group-[.active]:left-px transition-all duration-150',
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
              </div>
            </NavLink>
          ))}
      </div>
    </nav>
  );
};

export default ListGroup;
