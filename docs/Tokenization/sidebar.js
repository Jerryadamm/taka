module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Data Encryption',
      items: [
        {
          type: 'category',
          label: 'API Documentation', // Label untuk dropdown pertama
          items: [
            'api-documentation/doc1',
            'api-documentation/doc2',
          ],
        },
        {
          type: 'category',
          label: 'Functional Documentation', // Label untuk dropdown kedua
          items: [
            'functional-documentation/doc3',
            'functional-documentation/doc4',
          ],
        },
        {
          type: 'category',
          label: 'User Guide', // Label untuk dropdown kedua
          items: [
            'user-guide/doc5',
            'user-guide/doc6',
          ],
        },
      ],
    }
  ],
};