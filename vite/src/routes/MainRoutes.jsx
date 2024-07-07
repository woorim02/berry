import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Home from 'views/Home';
import CgvEventPage from 'views/cgv/event/EventPage';
import CgvGiveawayPage from 'views/cgv/event/giveaway/GiveawayPage';
import CgvGiveawayDetailPage from 'views/cgv/event/giveaway/detail/DetailPage';
import LotteEventPage from 'views/lotte/event/EventPage';



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
      path: 'cgv/event',
      element: <CgvEventPage/>
    },
    {
      path: 'cgv/event/giveaway',
      element: <CgvGiveawayPage/>,
    },
    {
      path: 'cgv/event/giveaway/detail',
      element: <CgvGiveawayDetailPage/>,
    },
    {
      path: 'lotte/event',
      element: <LotteEventPage/>
    },
  ]
};

export default MainRoutes;
