import { useEffect, useContext } from 'react';
import { TaskListContext } from '../../contexts/tasklistsContext';

import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import ListCard from './components/ListCard';

const Resume = () => {
  const { lists, loadingLists, loadLists } = useContext(TaskListContext);

  useEffect(() => {
    loadLists();
  }, []);

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
                <Button variant="primary" size="md" />
              </div>
            </div>

            <div className="flex gap-5 dark:text-gray-200 text-gray-300 duration-10"></div>
          </div>
          <div className="grid grid-cols-4 gap-x-12 gap-y-8">
            {loadingLists && <span>Carregando listas...</span>}

            {!loadingLists && (
              <>
                {lists
                  .filter((list) => list.deleted === false)
                  .map((list) => (
                    <ListCard key={list.id} list={list} />
                  ))}
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
