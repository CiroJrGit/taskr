import * as Checkbox from '@radix-ui/react-checkbox';
import { TaskProps } from '../../../types/taskListProps';

import { BsCheck } from 'react-icons/bs';

interface TaskItemProps {
  task: TaskProps;
}

const Task = ({ task }: TaskItemProps) => {
  return (
    <div
      key={task.id}
      className="flex items-center h-[52px] px-4 rounded-md dark:hover:bg-gray-700 hover:bg-white-700"
    >
      <Checkbox.Root className="flex items-center gap-4 w-full h-full group focus:outline-none disabled:opacity-30">
        <div
          className="
              flex justify-center items-center w-7 h-7 rounded-md dark:bg-gray-900 bg-white-900 border dark:border-gray-300 border-gray-300
              group-data-[state=checked]:bg-blue-600 group-data-[state=checked]:border-blue-600 group-focus:ring-2
            "
        >
          <Checkbox.Indicator>
            <BsCheck size={34} className="text-gray-100" />
          </Checkbox.Indicator>
        </div>

        <span
          className="
              text-lg dark:text-gray-100 text-gray-500 group-data-[state=checked]:line-through
              dark:group-data-[state=checked]:text-gray-400 group-data-[state=checked]:text-white-500/60 group-data-[state=checked]:font-medium
            "
        >
          {task.name}
        </span>
      </Checkbox.Root>
    </div>
  );
};

export default Task;
