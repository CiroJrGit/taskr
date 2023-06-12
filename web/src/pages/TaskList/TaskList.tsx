import { useState } from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';

import { ListProps } from '../../types/taskListProps';
import { seedLists } from '../../utils/seedList';

import * as Popover from '@radix-ui/react-popover';
import Sidebar from '../../components/Sidebar';
import NewTask from './components/NewTask';
import EditList from '../../components/EditList';
import ProgressBar from '../../components/ProgressBar';
import Task from './components/Task';

import { IoEllipsisHorizontal } from 'react-icons/io5';

const TaskList = () => {
  const { title } = useParams();

  const [lists] = useState<ListProps[]>(seedLists);
  const thisList = lists.find((list) => list.title === title);

  return (
    <>
      <Sidebar />

      <main className="w-full max-w-[920px] mx-auto pt-16">
        <div className="space-y-10">
          <div className="space-y-12">
            <div className="flex justify-between items-center px-4">
              <div className="relative">
                <span
                  className={clsx(
                    'block absolute inset-y-0.75 -left-5 w-1.5 h-7 rounded-sm',
                    {
                      'bg-main-blue': title,
                      // 'bg-main-purple': list.theme === '#8029EE',
                      // 'bg-main-pink': list.theme === '#EE29B7',
                      // 'bg-main-red': list.theme === '#F4385A',
                      // 'bg-main-yellow': list.theme === '#EE9329',
                      // 'bg-main-green': list.theme === '#29EE9B',
                    },
                  )}
                  aria-hidden="true"
                ></span>
                <h1 className="font-semibold text-3xl dark:text-gray-100 text-gray-500">
                  {title}
                </h1>
              </div>
              <Popover.Root>
                <Popover.Trigger
                  className="
                    p-1 rounded-xl text-3xl dark:text-gray-300 text-white-400 dark:hover:bg-gray-600 hover:bg-white-700
                    dark:active:bg-gray-700 active:bg-white-600/80 focus:outline-none focus-visible:ring-1.5
                    dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-1
                    dark:focus-visible:ring-offset-gray-900 focus-visible:ring-offset-white-900
                  "
                >
                  <IoEllipsisHorizontal />
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content className="relative focus:outline-none">
                    <EditList variant="md" />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row-reverse items-center gap-3 h-14 px-5 py-1 rounded-lg dark:bg-gray-700 bg-white-700">
                <NewTask />
              </div>
              <div className="px-1">
                <ProgressBar />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4">
            {thisList?.tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default TaskList;
