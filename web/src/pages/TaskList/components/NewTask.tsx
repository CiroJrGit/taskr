import { HiOutlinePlus } from 'react-icons/hi';

const NewTask = () => {
  return (
    <>
      <input
        className="
          w-full h-full font-normal text-xl dark:placeholder:text-gray-300 placeholder:text-white-400 dark:text-gray-100 text-gray-500
          bg-transparent focus:outline-none peer
        "
        type="text"
        placeholder="Adicione uma tarefa"
      />
      <HiOutlinePlus className="text-2xl dark:text-gray-300 text-white-400 dark:peer-focus:text-gray-100 peer-focus:text-gray-500" />
    </>
  );
};

export default NewTask;
