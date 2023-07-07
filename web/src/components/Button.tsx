import { ButtonProps } from '../types/buttonProps';

import * as Dialog from '@radix-ui/react-dialog';
import Modal from './Modal';
import { HiOutlinePlus } from 'react-icons/hi';

function Button({ variant, disabled, title, size, onClick }: ButtonProps) {
  return (
    <>
      {variant === 'primary' && (
        <>
          {size === 'lg' && (
            <button
              className="primary max-h-[64px] px-5 py-4.5 rounded-lg font-bold text-lg focus-visible:ring-2"
              onClick={onClick}
            >
              {title}
            </button>
          )}

          {size === 'md' && (
            <Dialog.Root>
              <Dialog.Trigger
                className="primary px-3 py-2 rounded-lg font-medium text-base focus-visible:ring-1.5"
                type="button"
              >
                <HiOutlinePlus className="text-lg" />
                <span className="text-2sm font-medium duration-10">
                  Nova Lista
                </span>
              </Dialog.Trigger>

              <Modal type="new" />
            </Dialog.Root>
          )}

          {size === 'sm' && (
            <button
              className="primary px-5 py-1.5 rounded-md font-semibold text-sm focus-visible:ring-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={onClick}
              disabled={disabled}
            >
              {title}
            </button>
          )}
        </>
      )}

      {variant === 'ghost' && (
        <Dialog.Root>
          <Dialog.Trigger className="ghost" type="button">
            <HiOutlinePlus className="text-xl" />
            <span className="text-base font-medium duration-10">
              Nova Lista
            </span>
          </Dialog.Trigger>

          <Modal type="new" />
        </Dialog.Root>
      )}
    </>
  );
}

export default Button;
