import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
  Favorites,
} from './pages';

import { loader as landingLoader } from './pages/Landing.jsx';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsLetterAction } from './pages/Newsletter';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes , this is used for caching
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true, //main page bc we set it as index: true
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsLetterAction,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* query for caching */}
      <RouterProvider router={router} /> {/* for routing */}
      <ReactQueryDevtools initialIsOpen={false} /> {/* devtools */}
    </QueryClientProvider>
  );
};
export default App;
