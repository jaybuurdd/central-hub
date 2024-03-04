import { HELP_DESK_ITEMS } from './sidebar-items/help-desk-items.contants';
import { ADMINISTRATOR_ITEMS } from './sidebar-items/admin-items.constants';
import { FULL_CONTROL_ITEMS } from './sidebar-items/full-control-items.constants';
import { DOWNLOAD_ITEMS } from './sidebar-items/download-items.constants';
import { READ_ITEMS } from './sidebar-items/read-items.constants';

export interface NavItem {
  label: string;
  path?: string;
  icon?: string;
  roles: string[];
  children?: NavItem[];
  expanded?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      icon: 'dashboard',
      roles: ['Help Desk', 'Administrator', 'Full Control', 'Download', 'Read'],
    },
    ...HELP_DESK_ITEMS,
    ...ADMINISTRATOR_ITEMS,
    ...FULL_CONTROL_ITEMS,
    ...DOWNLOAD_ITEMS,
    ...READ_ITEMS

];

