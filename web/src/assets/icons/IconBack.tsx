import { IconProps } from '../../types/iconProps';

const IconBack = ({ width, height, stroke }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.61111 1.22223L1 4.83334L4.61111 8.44445"
        className="dark:stroke-gray-200 stroke-gray-300"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 4.83334H6.77778C10.7665 4.83334 14 8.06688 14 12.0556V12.7778"
        className="dark:stroke-gray-200 stroke-gray-300"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconBack;
