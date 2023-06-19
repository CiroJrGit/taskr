import clsx from 'clsx';

import * as Dialog from '@radix-ui/react-dialog';
import * as Separator from '@radix-ui/react-separator';
import Modal from './Modal';

import IconEdit from '../assets/icons/IconEdit';
import IconTrash from '../assets/icons/IconTrash';

interface EditListProps {
  variant: string;
}

const EditList = ({ variant }: EditListProps) => {
  const colors = [
    '#265EED',
    '#8029EE',
    '#EE29B7',
    '#F4385A',
    '#EE9329',
    '#29EE9B',
  ];

  // function handleColorList(color: string) {
  //   console.log(color);
  // }

  return (
    <>
      {variant === 'sm' && (
        <div className="flex flex-col gap-3 mt-3 mr-1">
          <Dialog.Root>
            <Dialog.Trigger
              className="
                flex justify-center p-1 rounded-lg font-medium text-sm dark:active:bg-gray-500/30 active:bg-white-600 dark:hover:bg-gray-500/50 hover:bg-white-600/60
                focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
              "
              type="button"
            >
              <IconEdit width="20" height="20" stroke="1.6" />
            </Dialog.Trigger>

            <Modal />
          </Dialog.Root>

          <button
            className="
              flex justify-center p-1 rounded-lg font-medium text-sm dark:active:bg-gray-500/30 active:bg-white-600 dark:hover:bg-gray-500/50 hover:bg-white-600/60
              focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
              dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
            "
          >
            <IconTrash width="20" height="20" stroke="1.3" />
          </button>
        </div>
      )}

      {variant === 'md' && (
        <>
          <div
            className="
              absolute -right-8 flex flex-col gap-4 mt-1 font-int rounded-lg
              dark:bg-gray-600 bg-white-700 drop-shadow-md
            "
          >
            <div className="px-4 pt-3">
              <span className="font-medium text-3xs dark:text-gray-300 text-white-500">
                Editar lista de tarefas
              </span>
              <Separator.Root
                className="mt-1 dark:bg-gray-500 bg-white-600 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full"
                decorative
              />
            </div>

            <div className="space-y-6 pb-4 px-2 dark:text-gray-200 text-gray-300">
              <div className="px-3 font-medium text-2sm">
                <span>Cor de destaque</span>
                <div className="flex gap-1 mt-4">
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      // onClick={() => {
                      //   handleColorList(color);
                      // }}
                      className={clsx(
                        'w-8 h-8 rounded-[5px] hover:border-2 dark:border-white-600 border-gray-500 focus:outline-none focus-visible:ring-1.5 focus-visible:ring-offset-1',
                        'dark:focus-visible:ring-gray-200 focus-visible:ring-gray-400 dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700',
                        {
                          'bg-main-blue': color === '#265EED',
                          'bg-main-purple': color === '#8029EE',
                          'bg-main-pink': color === '#EE29B7',
                          'bg-main-red': color === '#F4385A',
                          'bg-main-yellow': color === '#EE9329',
                          'bg-main-green': color === '#29EE9B',

                          'border-2 scale-[1.09] focus-visible:ring-1 focus-visible:ring-offset-0':
                            color === '#265EED',
                        },
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Dialog.Root>
                  <Dialog.Trigger
                    className="
                      flex items-center px-3 py-2 rounded-md font-medium text-2sm dark:active:bg-gray-500/30 active:bg-white-600 dark:hover:bg-gray-500/50 hover:bg-white-600/60
                      focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                      dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
                    "
                    type="button"
                  >
                    <div className="flex items-center w-8 h-6">
                      <IconEdit width="21" height="21" stroke="1.6" />
                    </div>
                    <span>Renomear</span>
                  </Dialog.Trigger>

                  <Modal />
                </Dialog.Root>

                <button
                  className="
                    flex items-center px-3 py-2 rounded-md font-medium text-2sm dark:text-main-red text-red-600 dark:active:bg-gray-500/30 active:bg-white-600 dark:hover:bg-gray-500/50 hover:bg-white-600/60
                    focus:outline-none focus-visible:ring-1.5 dark:focus-visible:ring-gray-300 focus-visible:ring-white-400 focus-visible:ring-offset-2
                    dark:focus-visible:ring-offset-gray-600 focus-visible:ring-offset-white-700
                  "
                >
                  <div className="flex items-center w-8 h-6">
                    <IconTrash width="19" height="19" stroke="1.3" alert />
                  </div>
                  <span>Excluir lista</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EditList;
