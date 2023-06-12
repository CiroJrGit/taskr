import './styles/global.css';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import AuthProvider from './contexts/auth';
import ThemeProvider from './contexts/theme';

const App = () => (
  <div className="w-screen h-screen flex justify-center dark:bg-gray-900 dark:text-gray-100 bg-white-900 text-gray-500">
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </div>
);

export default App;
