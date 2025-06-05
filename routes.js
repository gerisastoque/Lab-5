import { createBrowserRouter } from 'react-router-dom';
import Home from './src/pages/Home';
import CreateCharacter from './src/pages/CreatCharacter';
import EditCharacter from './src/pages/EditCharacter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/create',
    element: <CreateCharacter/>
  },
  {
    path: '/edit/:id',
    element: <EditCharacter/>
  }
]);

export default router;