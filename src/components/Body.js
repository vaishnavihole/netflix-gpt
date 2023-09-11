import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import useNowPlayingMovies from './../hooks/useNowPlayingMovies';

 const  Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },

        {
            path: '/Browse',
            element: <Browse/>
        },
    ]);

  useNowPlayingMovies();

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  );

};


export default Body