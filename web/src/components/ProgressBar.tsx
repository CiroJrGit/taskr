import clsx from 'clsx';

interface ProgressBarProps {
  color: string;
}

const ProgressBar = ({ color }: ProgressBarProps) => {
  return (
    <div className="overflow-hidden w-full h-0.75 rounded-xl dark:bg-gray-700 bg-white-700 transition-all duration-300 ease-out">
      <div
        className={clsx('h-1 rounded-xl', {
          'bg-main-blue': color === '#265EED',
          'bg-main-purple': color === '#8029EE',
          'bg-main-pink': color === '#EE29B7',
          'bg-main-red': color === '#F4385A',
          'bg-main-yellow': color === '#EE9329',
          'bg-main-green': color === '#29EE9B',
        })}
        style={{ width: `100%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
