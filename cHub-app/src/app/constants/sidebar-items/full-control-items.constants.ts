import { NavItem } from "../navigation.constants";

export const FULL_CONTROL_ITEMS: NavItem[] = [
    {
      label: 'User Management',
      roles: ['Full Control'],
      children: [
        {
            label: 'Permission Groups',
            path: 'security/permission-groups',
            icon: 'person_pin',
            roles: ['Full Control']
        },
        {
            label: 'User Management',
            path: 'clients/user-management',
            icon: 'person_pin',
            roles: ['Full Control']
        },
        {
            label: 'User Roster',
            path: 'clients/user-roster',
            icon: 'person_pin',
            roles: ['Full Control']
        },
      ],
    },
    {
        label: 'Application Management',
        roles: ['Full Control'],
        children: [
            {
                label: 'Applications',
                path: 'digital-assets/applications',
                icon: 'person_pin',
                roles: ['Full Control']
            },
        ],
    },
    {
        label: 'Framework Management',
        roles: ['Full Control'],
        children: [
            {
                label: 'Frameworks',
                path: 'digital-assets/frameworks',
                icon: 'person_pin',
                roles: ['Full Control']
            },
        ],
    },
    {
        label: 'Document Library',
        roles: ['Full Control'],
        children: [
            {
                label: 'My Documents',
                path: 'digital-assets/my-documents',
                icon: 'person_pin',
                roles: ['Full Control']
            },
            {
                label: 'Library',
                path: 'digital-assets/library',
                icon: 'person_pin',
                roles: ['Full Control']
            }
        ],
    },
    {
        label: 'Internal Help Desk',
        roles: ['Full Control'],
        children: [
            {
                label: 'Tickets',
                path: 'support/tickets',
                icon: 'person_pin',
                roles: ['Full Control'],
            },
        ],
    }
]