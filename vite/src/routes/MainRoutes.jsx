import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Home from 'views/Home';
import CgvEventPage from 'views/cgv/event/EventPage';



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'cgv',
      children:[
        {
          path: 'event',
          element: <CgvEventPage/>
        }
      ]
    }
  ]
};

export default MainRoutes;
