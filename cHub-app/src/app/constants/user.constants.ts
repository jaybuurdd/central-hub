export const USER_LIST = {
    title: 'User List',
    columns: [
        { id: 'name', name: 'Name', type: 'text' },
        { id: 'dateOfBirth', name: 'Date of Birth', type: 'date' },
        { id: 'numberOfApplications', name: 'Number of Applications', type: 'number' },
        { id: 'accessStatus', name: 'Status', type: 'text' },
    ],
    data: new Array(20).fill(null).map((_, index) => ({
        name: `User ${index + 1}`,
        dateOfBirth: new Date(1980 + index, index % 12, (index % 28) + 1).toLocaleDateString(),
        numberOfApplications: Math.floor(Math.random() * 10),
        status: ['Pending', 'Active', 'Inactive'][index % 3]
    }))
};

export const PENDING_USER_LIST = {
    title: 'User List',
    columns: [
        { id: 'name', name: 'Name', type: 'text' },
        { id: 'dateOfBirth', name: 'Date of Birth', type: 'date' },
        { id: 'numberOfApplications', name: 'Number of Applications', type: 'number' },
        { id: 'status', name: 'Status', type: 'text' },
    ],
    data: new Array(4).fill(null).map((_, index) => ({
        name: `User ${index + 1}`,
        dateOfBirth: new Date(1980 + index, index % 12, (index % 28) + 1).toLocaleDateString(),
        numberOfApplications: Math.floor(Math.random() * 10),
        status:'Pending'
    }))
};
