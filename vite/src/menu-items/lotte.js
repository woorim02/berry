// assets
import { IconStack2, IconNotification, IconGift } from '@tabler/icons-react';
import Constants from '../constants'

// constant
const icons = { IconStack2, IconNotification, IconGift };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const lotte = {
  title: '롯데시네마',
  type: 'group',
  children: [
    {
      title: '이벤트 목록',
      type: 'item',
      url: Constants.lotte_event,
      icon: icons.IconStack2,
      breadcrumbs: false
    },
    {
      title: '경품 이벤트 현황',
      type: 'item',
      url: Constants.lotte_event_giveaway,
      icon: icons.IconGift,
      breadcrumbs: false
    },
  ]
};

export default lotte;
