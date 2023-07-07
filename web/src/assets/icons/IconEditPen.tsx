import { IconProps } from '../../types/iconProps';

const IconEditPen = ({ width, height, stroke }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2658 2.63733L2.05355 11.3297C1.74347 11.6598 1.44339 12.31 1.38337 12.7601L1.01327 16.001C0.883238 17.1713 1.72347 17.9715 2.88378 17.7715L6.10465 17.2213C6.55477 17.1413 7.18497 16.8112 7.49506 16.4711L15.7073 7.77872C17.1277 6.27832 17.7678 4.56786 15.5572 2.47729C13.3566 0.406731 11.6862 1.13693 10.2658 2.63733Z"
        className="dark:stroke-gray-300 stroke-white-400"
        strokeWidth={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.89526 4.08778C9.32538 6.84853 11.566 8.9591 14.3467 9.23913"
        className="dark:stroke-gray-300 stroke-white-400"
        strokeWidth={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconEditPen;
