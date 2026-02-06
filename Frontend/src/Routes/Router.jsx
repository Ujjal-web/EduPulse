import { createBrowserRouter } from 'react-router';
import Mainlayouts from '../Layouts/mainlayouts';
import HomePage from '../Pages/Home/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayouts />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
]);
