import { RouterProvider } from 'react-router';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import { router } from './routes';

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ThemeProvider>
  );
}
