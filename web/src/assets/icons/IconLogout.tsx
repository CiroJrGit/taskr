import { IconProps } from '../../types/iconProps';

const IconLogout = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.06323 6.02678C7.35692 2.8125 9.10953 1.5 12.9464 1.5H13.0695C17.3043 1.5 19.0001 3.09821 19.0001 7.08928V12.9107C19.0001 16.9018 17.3043 18.5 13.0695 18.5H12.9464C9.13795 18.5 7.38534 17.2054 7.07271 14.0446"
        className="dark:stroke-gray-200 stroke-gray-300"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8421 9.99106H2.0611"
        className="dark:stroke-gray-200 stroke-gray-300"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.17368 6.99991L1 9.99098L4.17368 12.982"
        className="dark:stroke-gray-200 stroke-gray-300"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconLogout;
