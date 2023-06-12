import { useState } from 'react';

import { ListProps } from '../../types/taskListProps';
import { seedLists } from '../../utils/seedList';

import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import ListCard from './components/ListCard';
import { RiSearchLine } from 'react-icons/ri';

const Resume = () => {
  const [lists] = useState<ListProps[]>(seedLists);
  const [search, setSearch] = useState<string>('');

  return (
    <>
      <Sidebar />

      <main className="w-full max-w-6xl mx-auto pt-16">
        <div className="space-y-20">
          <div className="space-y-7">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-3xl dark:text-gray-100 text-gray-500">
                Minhas Listas
              </h1>
              <div className="flex gap-4">
                <div className="relative flex flex-row-reverse items-center w-72 h-10">
                  <input
                    className="
                      w-full h-full px-11 py-1 rounded-lg font-normal text-base dark:placeholder:font-medium placeholder:font-medium peer
                      dark:placeholder:text-gray-300 placeholder:text-white-400 dark:text-gray-100 text-gray-500 dark:bg-gray-700 bg-white-700 focus:outline-none
                      focus-visible:ring-1.5 dark:focus-visible:ring-gray-500 focus-visible:ring-white-500 focus-visible:ring-offset-1
                      dark:focus-visible:ring-offset-gray-700 focus-visible:ring-offset-white-700
                    "
                    type="text"
                    id="search"
                    defaultValue={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Pesquisar..."
                    autoComplete="off"
                  />
                  <label
                    className="absolute left-4 text-lg dark:text-gray-300 text-white-400 dark:peer-focus:text-gray-100 peer-focus:text-gray-500"
                    htmlFor="search"
                  >
                    <RiSearchLine />
                  </label>
                </div>
                <Button variant="primary" size="md" />
              </div>
            </div>

            <div className="flex gap-5 dark:text-gray-200 text-gray-300 duration-10">
              <p>
                Listas criadas:
                <span className="font-medium dark:text-gray-100 text-gray-500">
                  {' '}
                  8
                </span>
              </p>
              <p>
                Listas criadas:
                <span className="font-medium dark:text-gray-100 text-gray-500">
                  {' '}
                  8
                </span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-x-12 gap-y-8">
            {lists.map((list) => (
              <ListCard key={list.id} list={list} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
