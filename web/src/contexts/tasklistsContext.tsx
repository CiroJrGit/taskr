import { useState, createContext } from 'react';
import { api } from '../lib/api';
import { setAuthorization } from '../lib/authorization';

import {
  ListProps,
  TaskProps,
  TaskListProviderProps,
  TaskListContextProps,
} from '../types/tasklistProps';

export const TaskListContext = createContext<TaskListContextProps>(
  {} as TaskListContextProps,
);

const TaskListProvider = ({ children }: TaskListProviderProps) => {
  const [lists, setLists] = useState<ListProps[]>([]);
  const [loadingLists, setLoadingLists] = useState(true);

  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [loadingTasks, setLoadingTasks] = useState(true);

  async function loadLists() {
    const authorization = setAuthorization();

    const taskListResponse = await api.get('/tasklists', authorization);

    setLists(taskListResponse.data);
    setLoadingLists(false);
  }

  async function handleGetTaskList(id: string) {
    const authorization = setAuthorization();

    const taskListResponse = await api.get(`/tasklists/${id}`, authorization);
    const newList: ListProps = taskListResponse.data;

    loadTasks(newList.id);
    return newList;
  }

  async function handleCreateTaskList(title: string) {
    const authorization = setAuthorization();

    await api.post('/tasklists', { title }, authorization);

    loadLists();
  }

  async function handleDeleteTaskList(id: string) {
    const authorization = setAuthorization();

    await api.delete(`/tasks/${id}/all`, authorization);
    await api.delete(`/tasklists/${id}`, authorization);

    loadLists();
  }

  async function handleEditTaskList(
    id: string | undefined,
    title: string | undefined,
    color: string | undefined,
    deleted: boolean | undefined,
  ) {
    const authorization = setAuthorization();

    await api.put(`/tasklists/${id}`, { title, color, deleted }, authorization);

    loadLists();
  }

  async function loadTasks(listId: string) {
    const authorization = setAuthorization();

    const taskResponse = await api.get(`/tasks/${listId}`, authorization);

    setTasks(taskResponse.data);
    setLoadingTasks(false);
  }

  async function handleCreateTask(desc: string, taskListId: string) {
    const authorization = setAuthorization();

    await api.post(`/tasks`, { desc, taskListId }, authorization);

    loadTasks(taskListId);
  }

  async function handleDeleteTask(id: string, taskListId: string) {
    const authorization = setAuthorization();

    await api.delete(`/tasks/${id}`, authorization);

    loadTasks(taskListId);
  }

  async function handleEditTask(id: string, desc: string, taskListId: string) {
    const authorization = setAuthorization();

    await api.put(`/tasks/${id}`, { desc }, authorization);

    loadTasks(taskListId);
  }

  async function handleToggleTask(
    taskId: string,
    completed: boolean,
    listId: string,
  ) {
    const authorization = setAuthorization();

    await api.put(`/tasks/${taskId}/toggle`, { completed }, authorization);

    loadTasks(listId);
  }

  return (
    <TaskListContext.Provider
      value={{
        lists,
        loadingLists,
        setLists,
        setLoadingLists,
        loadLists,
        handleGetTaskList,
        handleCreateTaskList,
        handleDeleteTaskList,
        handleEditTaskList,

        tasks,
        loadingTasks,
        setTasks,
        setLoadingTasks,
        loadTasks,
        handleCreateTask,
        handleDeleteTask,
        handleEditTask,
        handleToggleTask,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListProvider;
