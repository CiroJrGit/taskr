import { IconProps } from '../../types/iconProps';

const IconEdit = ({ width, height, stroke }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8328 1.15596H8.75882C3.57395 1.15596 1.5 3.22991 1.5 8.41478V14.6366C1.5 19.8215 3.57395 21.8954 8.75882 21.8954H14.9807C20.1655 21.8954 22.2395 19.8215 22.2395 14.6366V12.5627"
        className="dark:stroke-gray-200 stroke-gray-300"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0591 2.21368L7.88773 10.385C7.57663 10.6961 7.26554 11.3079 7.20332 11.7538L6.75742 14.8751C6.59151 16.0054 7.38998 16.7935 8.52028 16.638L11.6416 16.1921C12.0771 16.1299 12.6889 15.8188 13.0104 15.5077L21.1817 7.33633C22.592 5.92605 23.2557 4.28763 21.1817 2.21368C19.1078 0.13973 17.4694 0.803394 16.0591 2.21368Z"
        className="dark:stroke-gray-200 stroke-gray-300"
        strokeWidth={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8872 3.38536C15.582 5.86373 17.5211 7.80287 20.0099 8.50801"
        className="dark:stroke-gray-200 stroke-gray-300"
        strokeWidth={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconEdit;
