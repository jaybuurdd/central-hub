import { NavItem } from "../navigation.constants";

export const ADMINISTRATOR_ITEMS: NavItem[] = [
    {
      label: 'User Management',
      roles: ['Administrator'],
      children: [
        {
          label: 'Pending Access',
          path: 'action-items/pending-access',
          icon: 'person_pin',
          roles: ['Administrator'],
        },
        {
            label: 'Permission Groups',
            path: 'security/permission-groups',
            icon: 'person_pin',
            roles: ['Administrator'],
        },
        {
            label: 'User Management',
            path: 'clients/user-management',
            icon: 'person_pin',
            roles: ['Administrator'],
        },
        {
            label: 'User Roster',
            path: 'clients/user-roster',
            icon: 'person_pin',
            roles: ['Administrator'],
        },        
      ],
    },
    {
        label: 'Application Management',
        roles: ['Administrator'],
        children: [
            {
                label: 'Frameworks',
                path: 'digital-assets/frameworks',
                icon: 'person_pin',
                roles: ['Administrator'],
            }, 
            {
                label: 'Upload Framework',
                path: 'digital-assets/upload-framework',
                icon: 'person_pin',
                roles: ['Administrator'],
            },       
        ],
    },
    {
        label: 'Document Library',
        roles: ['Administrator'],
        children: [
            {
                label: 'My Documents',
                path: 'digital-assets/my-documents',
                icon: 'person_pin',
                roles: ['Administrator'],
            }, 
            {
                label: 'Library',
                path: 'digital-assets/library',
                icon: 'person_pin',
                roles: ['Administrator'],
            }, 
        ],
    },
    {
        label: 'Internal Help Desk',
        roles: ['Administrator'],
        children: [
            {
                label: 'Tickets',
                path: 'support/tickets',
                icon: 'person_pin',
                roles: ['Administrator'],
            }, 
        ]
    }
]