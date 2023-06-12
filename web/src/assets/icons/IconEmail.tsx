import { IconProps } from '../../types/iconProps';

const IconEmail = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.5 27.25H9.5C5 27.25 2 25 2 19.75V9.25C2 4 5 1.75 9.5 1.75H24.5C29 1.75 32 4 32 9.25V19.75C32 25 29 27.25 24.5 27.25Z"
        className="dark:stroke-gray-300 stroke-white-500"
        strokeWidth="1.9"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 10L19.805 13.75C18.26 14.98 15.725 14.98 14.18 13.75L9.5 10"
        className="dark:stroke-gray-300 stroke-white-500"
        strokeWidth="1.9"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconEmail;
