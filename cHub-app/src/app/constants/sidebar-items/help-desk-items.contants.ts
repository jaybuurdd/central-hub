import { NavItem } from "../navigation.constants";

export const HELP_DESK_ITEMS: NavItem[] = [ 
  {
      label: 'Pending Action Items',
      roles: ['Help Desk'],
      children: [
        {
          label: 'Pending Users',
          path: 'action-items/pending-users',
          icon: 'person_pin',
          roles: ['Help Desk'],
        },
        {
          label: 'Pending Applications',
          path: 'action-items/pending-applications',
          icon: 'person_pin',
          roles: ['Help Desk'],
        },
        {
          label: 'Pending Frameworks',
          path: 'action-items/pending-frameworks',
          icon: 'person_pin',
          roles: ['Help Desk'],
        },
      ],
    },
    {
      label: 'Digital Assets',
      roles: ['Help Desk'],
      children: [
        {
          label: 'Applications',
          path: 'digital-assets/applications',
          icon: 'person_pin',
          roles: ['Help Desk'],
        },
        {
          label: 'Frameworks',
          path: 'digital-assets/frameworks',
          icon: 'person_pin',
          roles: ['Help Desk'],
        },
        {
          label: 'Document Library',
          path: 'digital-assets/library',
          icon: 'local_library',
          roles: ['Help Desk'],
        },
      ],
    },
    {
      label: 'Companies, PO, Users',
      roles: ['Help Desk'],
      children: [
        {
          label: 'User Management',
          path: 'clients/user-management',
          icon: 'person',
          roles: ['Help Desk'],
        },
        {
          label: 'Company / PO',
          path: 'clients/companies',
          icon: 'domain',
          roles: ['Help Desk'],
        },
        {
          label: 'User Roster',
          path: 'clients/user-roster',
          icon: 'format_list_bulleted',
          roles: ['Help Desk'],
        },
      ],
    },
    {
      label: 'Help Desk',
      roles: ['Help Desk'],
      children: [
        {
          label: 'Tickets',
          path: 'support/tickets',
          icon: 'theaters',
          roles: ['Help Desk'],
        }
      ]
    },
  ]