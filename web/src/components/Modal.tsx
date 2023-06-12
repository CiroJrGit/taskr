import * as Dialog from '@radix-ui/react-dialog';
import Button from './Button';
import { HiOutlinePlus } from 'react-icons/hi';
import { motion } from 'framer-motion';

const shadow = {
  from: { opacity: 0 },
  to: { opacity: 1, transition: { duration: 0.18 } },
};

const Modal = () => {
  return (
    <Dialog.Portal>
      <motion.div variants={shadow} initial="from" animate="to">
        <Dialog.Overlay className="w-screen h-screen bg-black/70 fixed inset-0" />

        <Dialog.Content className="absolute space-y-9 w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg dark:bg-gray-900 bg-white-700">
          <Dialog.Title className="flex items-center gap-1 text-xl font-semibold dark:text-gray-100 text-gray-500">
            <HiOutlinePlus className="text-xl" />
            Nova Lista
          </Dialog.Title>

          <input
            className="
              w-full px-5 py-3 rounded-md dark:text-gray-100 text-gray-500 dark:placeholder:text-gray-300 placeholder:text-gray-300 dark:bg-gray-600 bg-white-600
              focus:outline-none focus:ring-1.5 dark:focus:ring-gray-500 focus:ring-white-400 focus:ring-offset-2
              dark:focus:ring-offset-gray-900 focus:ring-offset-white-700
              "
            type="text"
            placeholder="Título da lista..."
          />

          <div className="flex justify-end gap-2">
            <Button variant="primary" size="sm" title="Criar" />
            <Dialog.Close
              className="
                px-4 py-1.5 rounded-md font-semibold text-sm dark:text-gray-200 text-gray-400 border border-gray-300
                dark:hover:bg-gray-600 hover:bg-white-500/30 dark:active:bg-gray-700/50 active:bg-white-400/40 
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-400 focus-visible:ring-gray-300/90 focus-visible:ring-offset-2
                dark:focus-visible:ring-offset-gray-800 focus-visible:ring-offset-white-700
              "
            >
              Voltar
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </motion.div>
    </Dialog.Portal>
  );
};

export default Modal;
