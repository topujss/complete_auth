import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';

//---- create routes for public pages ----
const publicRouter = createBrowserRouter([
  {
    path: '/',
    element: <Profile />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

//---- export routes ----
export default publicRouter;
