import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import clsx from 'clsx';

import { TaskListContext } from '../../contexts/tasklistsContext';
import { ListProps } from '../../types/tasklistProps';

import * as Popover from '@radix-ui/react-popover';
import Sidebar from '../../components/Sidebar';
import NewTask from './components/NewTask';
import EditList from '../../components/EditList';
import Tasks from './components/Tasks';

import { IoEllipsisHorizontal } from 'react-icons/io5';

const TaskList = () => {
  const { lists, tasks, loadingTasks, loadTasks, handleGetTaskList } =
    useContext(TaskListContext);

  const { id } = useParams();
  const [list, setList] = useState<ListProps | any>();

  useEffect(() => {
    getList();

    if (list) {
      loadTasks(list.id);
    }
  }, [id, lists]);

  async function getList() {
    if (id) {
      const listResponse = await handleGetTaskList(id);
      setList(listResponse);
    }
  }

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
                      'bg-main-blue': list?.color === '#265EED',
                      'bg-main-purple': list?.color === '#8029EE',
                      'bg-main-pink': list?.color === '#EE29B7',
                      'bg-main-red': list?.color === '#F4385A',
                      'bg-main-yellow': list?.color === '#EE9329',
                      'bg-main-green': list?.color === '#29EE9B',
                    },
                  )}
                  aria-hidden="true"
                ></span>
                <h1 className="font-semibold text-3xl dark:text-gray-100 text-gray-500">
                  {list?.title}
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
                    <EditList variant="md" list={list} />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row-reverse items-center gap-3 h-14 px-5 py-1 rounded-lg dark:bg-gray-700 bg-white-700">
                <NewTask listColor={list?.color} listId={list?.id} />
              </div>
              <div className="px-1">
                <div className="overflow-hidden w-full h-0.75 rounded-xl dark:bg-gray-700 bg-white-700 transition-all duration-300 ease-out">
                  <div
                    className={clsx('h-1 rounded-xl', {
                      'bg-main-blue': list?.color === '#265EED',
                      'bg-main-purple': list?.color === '#8029EE',
                      'bg-main-pink': list?.color === '#EE29B7',
                      'bg-main-red': list?.color === '#F4385A',
                      'bg-main-yellow': list?.color === '#EE9329',
                      'bg-main-green': list?.color === '#29EE9B',
                    })}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4">
            {loadingTasks && <span>Carregando tarefas...</span>}

            {tasks.length === 0 && !loadingTasks && <span>Sem tarefas.</span>}

            {!loadingTasks && (
              <Tasks tasks={tasks} listColor={list?.color} listId={list?.id} />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default TaskList;
