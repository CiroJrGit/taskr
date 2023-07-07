import { useState, useContext, KeyboardEvent } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { TaskListContext } from '../../../contexts/tasklistsContext';
import clsx from 'clsx';

interface NewTaskProps {
  listColor: string;
  listId: string;
}

const NewTask = ({ listColor, listId }: NewTaskProps) => {
  const { handleCreateTask } = useContext(TaskListContext);
  const [desc, setDesc] = useState('');

  function handleInputEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleCreateTaskForm();
    }
  }

  function handleCreateTaskForm() {
    handleCreateTask(desc, listId).then(() => {
      setDesc('');
    });
  }

  return (
    <>
      <input
        className="
          w-full h-full font-normal text-xl dark:placeholder:text-gray-300 placeholder:text-white-400 dark:text-gray-100 text-gray-500
          bg-transparent focus:outline-none peer
        "
        type="text"
        value={desc}
        placeholder="Adicione uma tarefa"
        onChange={(e) => setDesc(e.target.value)}
        onKeyDown={handleInputEnter}
      />
      <button
        className={clsx(
          'rounded-md p-1  disabled:cursor-auto disabled:hover:dark:bg-transparent disabled:hover:bg-transparent ease-in-out duration-100',
          {
            'active:bg-blue-700/80 hover:bg-blue-700 bg-main-blue':
              listColor === '#265EED' && desc,
            'active:bg-opacity-60 hover:bg-opacity-70 bg-main-purple':
              listColor === '#8029EE' && desc,
            'active:bg-opacity-60 hover:bg-opacity-70 bg-main-pink':
              listColor === '#EE29B7' && desc,
            'active:bg-opacity-60 hover:bg-opacity-70 bg-main-red':
              listColor === '#F4385A' && desc,
            'active:bg-opacity-60 hover:bg-opacity-70 bg-main-yellow':
              listColor === '#EE9329' && desc,
            'active:bg-opacity-60 hover:bg-opacity-70 bg-main-green':
              listColor === '#29EE9B' && desc,
          },
        )}
        disabled={!desc}
        onClick={handleCreateTaskForm}
      >
        <HiOutlinePlus
          className={clsx('text-2xl dark:text-gray-300 text-white-400', {
            'dark:text-white-900 text-white-900': desc,
          })}
        />
      </button>
    </>
  );
};

export default NewTask;
