import { RouterProvider } from 'react-router-dom';
import publicRouter from './routes/publicRoutes';

const App = () => {
  return (
    <>
      <RouterProvider router={publicRouter}></RouterProvider>
    </>
  );
};

export default App;
