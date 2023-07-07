import { useState, useContext } from 'react';
import { TaskListContext } from '../../../contexts/tasklistsContext';
import { TaskProps } from '../../../types/tasklistProps';

import * as Checkbox from '@radix-ui/react-checkbox';
import * as Popover from '@radix-ui/react-popover';

import { BsCheck } from 'react-icons/bs';
import clsx from 'clsx';
import IconClose from '../../../assets/icons/IconClose';
import IconEditPen from '../../../assets/icons/IconEditPen';

interface TaskItemProps {
  tasks: TaskProps[];
  listColor: string;
  listId: string;
}

const Tasks = ({ tasks, listColor, listId }: TaskItemProps) => {
  const { handleToggleTask, handleDeleteTask, handleEditTask } =
    useContext(TaskListContext);

  const [descTask, setDescTask] = useState('');

  function handleAlternateEdit(id: string, desc: string, listId: string) {
    if (descTask !== desc && descTask !== '') {
      handleEditTask(id, descTask, listId);
    }
  }

  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center h-[52px] px-4 rounded-md dark:hover:bg-gray-700 hover:bg-white-700 group"
        >
          <Checkbox.Root
            className="flex items-center gap-4 w-full h-full group focus:outline-none disabled:opacity-30"
            onCheckedChange={() =>
              handleToggleTask(task.id, !task.completed, listId)
            }
            checked={task.completed}
          >
            <div
              className={clsx(
                'flex justify-center items-center w-7 h-7 rounded-md dark:bg-gray-900 bg-white-900 border dark:border-gray-300 border-gray-300 ',
                {
                  'group-data-[state=checked]:bg-main-blue group-data-[state=checked]:border-main-blue group-focus:ring-2':
                    listColor === '#265EED',
                  'group-data-[state=checked]:bg-main-purple group-data-[state=checked]:border-main-purple group-focus:ring-2':
                    listColor === '#8029EE',
                  'group-data-[state=checked]:bg-main-pink group-data-[state=checked]:border-main-pink group-focus:ring-2':
                    listColor === '#EE29B7',
                  'group-data-[state=checked]:bg-main-red group-data-[state=checked]:border-main-red group-focus:ring-2':
                    listColor === '#F4385A',
                  'group-data-[state=checked]:bg-main-yellow group-data-[state=checked]:border-main-yellow group-focus:ring-2':
                    listColor === '#EE9329',
                  'group-data-[state=checked]:bg-main-green group-data-[state=checked]:border-main-green group-focus:ring-2':
                    listColor === '#29EE9B',
                },
              )}
            >
              <Checkbox.Indicator>
                <BsCheck size={34} className="text-gray-100" />
              </Checkbox.Indicator>
            </div>

            <span
              className="
                text-lg dark:text-gray-100 text-gray-500 bg-transparent group-data-[state=checked]:line-through
                dark:group-data-[state=checked]:text-gray-400 group-data-[state=checked]:text-white-500/60 group-data-[state=checked]:font-medium cursor-pointer
              "
            >
              {task.desc}
            </span>
          </Checkbox.Root>
          <div className="flex gap-2">
            <Popover.Root>
              <Popover.Trigger
                className="
                  p-2 rounded-lg dark:active:bg-gray-500/30 active:bg-white-600 dark:hover:bg-gray-500/50 hover:bg-white-600/60
                  focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                  dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700 opacity-0 group-hover:opacity-100
                "
              >
                <IconEditPen width="18" height="18" stroke="2" />
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="focus:outline-none">
                  <div className="relative -left-[369px] -top-9 flex gap-2 items-center rounded-lg bg-transparent">
                    <input
                      className="mt-0.5 p-1 w-[730px] rounded-md dark:text-gray-100 text-gray-500 dark:bg-gray-700 bg-white-700 border dark:border-gray-300 border-white-400 focus:outline-none"
                      type="text"
                      onChange={(e) => setDescTask(e.target.value)}
                      defaultValue={task.desc}
                    />
                    <Popover.Close
                      className="mt-0.5 p-2 rounded-lg dark:active:bg-gray-500/30 active:bg-white-600 dark:hover:bg-gray-500/50 hover:bg-white-600/60"
                      onClick={() =>
                        handleAlternateEdit(task.id, task.desc, listId)
                      }
                    >
                      <IconEditPen width="18" height="18" stroke="2" />
                    </Popover.Close>
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
            <button
              className="
                px-2.5 py-2 rounded-lg dark:active:bg-gray-500/30 active:bg-white-600 dark:hover:bg-gray-500/50 hover:bg-white-600/60
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700 opacity-0 group-hover:opacity-100
              "
              onClick={() => handleDeleteTask(task.id, listId)}
            >
              <IconClose width="15" height="15" stroke="2.5" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Tasks;
