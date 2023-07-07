import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

const PrivateRoute = ({ children, redirectTo }: any) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
