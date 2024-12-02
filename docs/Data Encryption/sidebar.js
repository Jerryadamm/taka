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
              'Api-documentation/register-success',
              'Api-documentation/register-dengan-email-yang-sudah-terdaftar',
              'Api-documentation/register-dengan-mengisi-password-atau-confirm-password-tidak-sama',
              'Api-documentation/register-denga-mengisi-fullname-kurang-dari-5-huruf',
              'Api-documentation/login-succes',
              'Api-documentation/login-dengan-email-yang-belum-terdaftar',
            ],
          },
          {
            type: 'category',
            label: 'Functional Documentation', // Label untuk dropdown kedua
            items: [
              'Functional-Documentation/doc3',
              'Functional-Documentation/doc4',
            ],
          },
          {
            type: 'category',
            label: 'User Guide', // Label untuk dropdown kedua
            items: [
              'User-Guide/doc5',
              'User-Guide/doc6',
            ],
          },
        ],
      }
    ],
  };