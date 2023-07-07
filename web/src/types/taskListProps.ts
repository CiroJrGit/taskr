import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface ListProps {
  id: string;
  userId: string;
  title: string;
  createdAt: Date;
  color: string;
  deleted: boolean;
}

export interface TaskProps {
  id: string;
  taskListId: string;
  desc: string;
  completed: boolean;
}

export interface TaskListProviderProps {
  children: ReactNode;
}

export interface TaskListContextProps {
  lists: ListProps[];
  loadingLists: boolean;
  setLists: Dispatch<SetStateAction<ListProps[]>>;
  setLoadingLists: Dispatch<SetStateAction<boolean>>;
  loadLists: () => Promise<void>;
  handleGetTaskList: (id: string) => Promise<ListProps>;
  handleCreateTaskList: (title: string) => void;
  handleDeleteTaskList: (title: string) => void;
  handleEditTaskList: (
    id: string | undefined,
    title: string | undefined,
    color: string | undefined,
    deleted: boolean | undefined,
  ) => Promise<void>;

  tasks: TaskProps[];
  loadingTasks: boolean;
  setTasks: Dispatch<SetStateAction<TaskProps[]>>;
  setLoadingTasks: Dispatch<SetStateAction<boolean>>;
  loadTasks: (listId: string) => Promise<void>;
  handleCreateTask: (desc: string, taskListId: string) => Promise<void>;
  handleDeleteTask: (id: string, taskListId: string) => void;
  handleEditTask: (
    id: string,
    desc: string,
    taskListId: string,
  ) => Promise<void>;
  handleToggleTask: (
    taskId: string,
    completed: boolean,
    listId: string,
  ) => Promise<void>;
}
