import { MouseEventHandler, ReactNode } from 'react';

export interface ButtonProps {
  variant: string;
  disabled?: boolean;
  title?: string | ReactNode;
  size?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
