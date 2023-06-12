import { ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import Modal from './Modal';
import { HiOutlinePlus } from 'react-icons/hi';

interface ButtonProps {
  variant: string;
  disabled?: boolean;
  title?: string | ReactNode;
  size?: string;
}

function Button({ variant, disabled, title, size }: ButtonProps) {
  return (
    <>
      {variant === 'primary' && (
        <>
          {size === 'lg' && (
            <button className="primary max-h-[64px] px-5 py-4.5 rounded-lg font-bold text-lg focus-visible:ring-2">
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
                <span className="text-2sm font-medium duration-10">Lista</span>
              </Dialog.Trigger>

              <Modal />
            </Dialog.Root>
          )}

          {size === 'sm' && (
            <button className="primary px-5 py-1.5 rounded-md font-semibold text-sm focus-visible:ring-1.5">
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

          <Modal />
        </Dialog.Root>
      )}
    </>
  );
}

export default Button;
