import { IconProps } from '../../types/iconProps';

const IconClose = ({ width, height, stroke }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 2L2 15"
        className="dark:stroke-gray-300 stroke-white-400"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 2L15 15"
        className="dark:stroke-gray-300 stroke-white-400"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconClose;
