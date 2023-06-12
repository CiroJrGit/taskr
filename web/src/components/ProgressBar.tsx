import * as Progress from '@radix-ui/react-progress';

const ProgressBar = () => {
  return (
    <Progress.Root className="overflow-hidden w-full h-0.75 rounded-xl dark:bg-gray-700 bg-white-700">
      <Progress.Indicator
        className="h-1 rounded-xl bg-blue-600"
        style={{ width: '34%' }}
      />
    </Progress.Root>
  );
};

export default ProgressBar;
