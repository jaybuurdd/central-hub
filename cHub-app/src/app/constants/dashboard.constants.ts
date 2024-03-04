export interface DashboardCard {
    title: string;
    number?: string;
    icon?: string;
} 

export const DASHBOARD_DATA: {[role: string]: DashboardCard[]} = {
    'Help Desk': [
        { title: '# of Pending Tickets', number: "4" },
        { title: '# of Open Tickets', number: "114" },
        { title: '# of Closed Tickets', number: "223" }

    ],
    'Administrator': [
        { title: '# of Pending User Access', number: "34" },
        { title: '# of Pending Tickets', number: "4" },

    ],
    'Full Control': [
        { title: '# of Pending User Access', number: "34" },
        { title: '# of Open Tickets', number: "114" },
        { title: '# of Pending Applications', number: "12" }

    ]
}
