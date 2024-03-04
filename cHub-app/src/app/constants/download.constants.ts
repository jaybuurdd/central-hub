export const DOWNLOAD_HISTORY = {
    title: 'Download History',
    columns: [
        { id: 'fileName', name: 'File Name', type: 'text' },
        { id: 'downloadDate', name: 'Download Date', type: 'date' },
        { id: 'fileSize', name: 'File Size (MB)', type: 'number' },
        { id: 'downloadedBy', name: 'Downloaded By', type: 'text' },
    ],
    data: [
        { fileName: 'Report_2023.pdf', downloadDate: new Date(2021, 11, 24).toLocaleDateString(), fileSize: 1.5, downloadedBy: 'Alice' },
        { fileName: 'Presentation_Feedback.pdf', downloadDate: new Date(2022, 0, 12).toLocaleDateString(), fileSize: 2.2, downloadedBy: 'Bob' },
        { fileName: 'Data_Export.csv', downloadDate: new Date(2022, 1, 5).toLocaleDateString(), fileSize: 0.8, downloadedBy: 'Charlie' },
    ],
};

  
  