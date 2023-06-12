import { IconProps } from '../../types/iconProps';

const IconCheck = ({ width, height, stroke }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8 29H19.2C26.2 29 29 26.2 29 19.2V10.8C29 3.8 26.2 1 19.2 1H10.8C3.8 1 1 3.8 1 10.8V19.2C1 26.2 3.8 29 10.8 29Z"
        fill={stroke}
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.04968 14.9998L13.0117 18.9618L20.9497 11.0379"
        stroke="#E3E3E3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconCheck;
