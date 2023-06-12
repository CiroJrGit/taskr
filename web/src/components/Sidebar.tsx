import Menu from './Menu';
import ListGroup from './ListGroup';
import Button from './Button';

const Sidebar = () => {
  return (
    <aside className="flex flex-col px-2 py-5 gap-8 w-72 h-screen dark:bg-gray-800 bg-white-800">
      <header>
        <Menu />
      </header>

      <div className="flex flex-col justify-between h-screen">
        <ListGroup />
        <Button variant="ghost" />
      </div>
    </aside>
  );
};

export default Sidebar;
