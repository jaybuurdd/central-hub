export const PENDING_APPLICATION_LIST = {
    title: 'Pending Applications',
    columns: [
        { id: 'applicationName', name: 'Application Name', type: 'text' },
        { id: 'submittedDate', name: 'Submitted Date', type: 'date' },
        { id: 'status', name: 'Status', type: 'text' },
        { id: 'filePath', name: 'File Path', type: 'text' },
    ],
    data: new Array(20).fill(null).map((_, index) => ({
        applicationName: `Application ${index + 1}`,
        submittedDate: new Date(2023, 0, index + 1).toISOString().split('T')[0], 
        status: 'Pending', 
        filePath: `/path/to/application_${index + 1}.pdf` 
    })),
    action: 'view'
};

export const APPLICATION_LIST = {
    title: 'Applications',
    columns: [
        { id: 'applicationName', name: 'Application Name', type: 'text' },
        { id: 'submittedDate', name: 'Submitted Date', type: 'date' },
        { id: 'status', name: 'Status', type: 'text' },
        { id: 'filePath', name: 'File Path', type: 'text' },
    ],
    data: new Array(37).fill(null).map((_, index) => ({
        applicationName: `Application ${index + 1}`,
        submittedDate: new Date(2023, 0, index + 1).toISOString().split('T')[0], 
        status:['Pending', 'Active', 'Inactive'][index % 3],
        filePath: `/path/to/application_${index + 1}.pdf` 
    })),
    action: 'view'
};