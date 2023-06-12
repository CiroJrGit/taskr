import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

const PrivateRoute = ({ children, redirectTo }: any) => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
