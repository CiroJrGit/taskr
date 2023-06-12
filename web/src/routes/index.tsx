import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import AuthPage from '../pages/AuthPage/AuthPage';
import AuthPageTest from '../pages/_AuthPage/AuthPageTest';
import Resume from '../pages/Resume/Resume';
import TaskList from '../pages/TaskList/TaskList';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/alt" element={<AuthPageTest />} />

      <Route
        path="/resume"
        element={
          <PrivateRoute redirectTo="/">
            <Resume />
          </PrivateRoute>
        }
      />
      <Route
        path="/tasklist/:title"
        element={
          <PrivateRoute redirectTo="/">
            <TaskList />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
