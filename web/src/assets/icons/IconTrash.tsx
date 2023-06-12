import { IconProps } from '../../types/iconProps';
import clsx from 'clsx';

const IconTrash = ({ width, height, stroke, alert }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 2.60718L3.04749 13.9194C3.26374 15.1142 4.20419 16.0978 5.48054 16.4642L5.77249 16.5479C7.87253 17.1506 10.1275 17.1506 12.2275 16.5479L12.5195 16.4642C13.7958 16.0978 14.7363 15.1142 14.9525 13.9194L17 2.60718"
        className={clsx({
          'dark:stroke-gray-200 stroke-gray-300': !alert,
          'dark:stroke-main-red stroke-red-600': alert,
        })}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 4.2145C13.4183 4.2145 17 3.49491 17 2.60725C17 1.71959 13.4183 1 9 1C4.58172 1 1 1.71959 1 2.60725C1 3.49491 4.58172 4.2145 9 4.2145Z"
        className={clsx({
          'dark:stroke-gray-200 stroke-gray-300': !alert,
          'dark:stroke-main-red stroke-red-600': alert,
        })}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconTrash;
