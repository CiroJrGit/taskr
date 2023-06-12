import { NavLink } from 'react-router-dom';
import { ListProps } from '../../../types/taskListProps';

import * as Popover from '@radix-ui/react-popover';
import EditList from '../../../components/EditList';

import IconCheck from '../../../assets/icons/IconCheck';
import { IoEllipsisVertical } from 'react-icons/io5';

interface ListCardProps {
  list: ListProps;
}

const ListCard = ({ list }: ListCardProps) => {
  return (
    <div className="relative">
      <NavLink
        to={`/tasklist/${list.title}`}
        className="
          flex flex-col gap-14 p-5 rounded-lg dark:bg-gray-700 bg-white-700 border border-transparent hover:dark:border-gray-500/40 hover:border-white-500/40
          dark:hover:shadow-[0px_2px_11px_-5px_rgba(148,148,164,0.3)] hover:shadow-[0px_2px_11px_-5px_rgba(72,72,83,0.3)]
          focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400
          focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 focus-visible:ring-offset-white-900
        "
      >
        <div className="flex justify-between items-center">
          <IconCheck width="30" height="30" stroke={list.theme} />
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-normal text-xl dark:text-gray-100 text-gray-400">
            {list.title}
          </span>
          <span className="font-semibold tracking-wider text-2sm dark:text-gray-200 text-gray-300">
            0/{list.tasks.length}
          </span>
        </div>
      </NavLink>

      <Popover.Root>
        <Popover.Trigger
          className="
            absolute top-5 right-3 p-1 rounded-lg text-2xl dark:text-gray-300 text-white-400 dark:hover:bg-gray-500/50 hover:bg-white-600
            dark:active:bg-gray-500/30 active:bg-white-500/40 focus:outline-none focus-visible:ring-1.5
            dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-1
            dark:focus-visible:ring-offset-gray-700 focus-visible:ring-offset-white-700
          "
        >
          <IoEllipsisVertical />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="relative focus:outline-none">
            <EditList variant="sm" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default ListCard;
