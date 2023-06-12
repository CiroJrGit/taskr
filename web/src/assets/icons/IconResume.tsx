import { IconProps } from '../../types/iconProps';

const IconResume = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 9.1V13.85C19 18.6 17.2 20.5 12.7 20.5H7.3C2.8 20.5 1 18.6 1 13.85V8.15C1 3.4 2.8 1.5 7.3 1.5H11.8"
        className="dark:stroke-gray-200 stroke-gray-300"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 9.1H15.4C12.7 9.1 11.8 8.15 11.8 5.3V1.5L19 9.1Z"
        className="dark:stroke-gray-200 stroke-gray-300"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 11.95H10.9"
        className="dark:stroke-gray-200 stroke-gray-300"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 15.75H9.1"
        className="dark:stroke-gray-200 stroke-gray-300"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconResume;
