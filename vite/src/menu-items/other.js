// assets
import { IconBell } from '@tabler/icons-react';
import Constants from '../constants'

// constant
const icons = { IconBell };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  title:'Other',
  type: 'group',
  children: [
    {
      title: '프로모션 쿠폰 목록',
      type: 'item',
      url: Constants.promo_list,
      icon: icons.IconBell,
      external: true,
      target: true
    }
  ]
};

export default other;