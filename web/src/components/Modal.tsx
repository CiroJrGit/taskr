/* eslint-disable prettier/prettier */
import { useState, useContext } from 'react';
import { TaskListContext } from '../contexts/tasklistsContext';

import { ListProps } from '../types/tasklistProps';
import * as Dialog from '@radix-ui/react-dialog';
import Button from './Button';
import { motion } from 'framer-motion';

interface ModalProps {
  list?: ListProps;
  type: string;
}

const shadow = {
  from: { opacity: 0 },
  to: { opacity: 1, transition: { duration: 0.18 } },
};

const Modal = ({ type, list }: ModalProps) => {
  const { handleCreateTaskList, handleEditTaskList } =
    useContext(TaskListContext);

  const [title, setTitle] = useState('');

  return (
    <Dialog.Portal>
      <motion.div variants={shadow} initial="from" animate="to">
        <Dialog.Overlay className="w-screen h-screen bg-black/70 fixed inset-0" />

        <Dialog.Content className="absolute space-y-9 w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg dark:bg-gray-900 bg-white-700">
          <Dialog.Title className="flex items-center gap-1 text-xl font-semibold dark:text-gray-100 text-gray-500">
            {type === 'new' && 'Nova Lista'}
            {type === 'edit' && 'Editar Lista'}
          </Dialog.Title>

          <input
            className="
              w-full px-5 py-3 rounded-md dark:text-gray-100 text-gray-500 dark:placeholder:text-gray-300 placeholder:text-gray-300 dark:bg-gray-600 bg-white-600
              focus:outline-none focus:ring-1.5 dark:focus:ring-gray-500 focus:ring-white-400 focus:ring-offset-2
              dark:focus:ring-offset-gray-900 focus:ring-offset-white-700
              "
            type="text"
            defaultValue={type === 'edit' ? list?.title : ''}
            placeholder="Título da lista..."
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="flex justify-end gap-2">
            <Dialog.Close asChild>
              <Button
                variant="primary"
                size="sm"
                title={type === 'new' ? 'Criar' : 'Salvar'}
                disabled={title === ''}
                onClick={
                  type === 'new'
                    ? () => handleCreateTaskList(title)
                    : () => handleEditTaskList(list?.id, title, list?.color, list?.deleted)
                }
              />
            </Dialog.Close>
            <Dialog.Close className="secondary" onClick={() => setTitle('')}>
              Voltar
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </motion.div>
    </Dialog.Portal>
  );
};

export default Modal;
