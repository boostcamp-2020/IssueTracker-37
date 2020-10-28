module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('labels', [
      {
        title: 'bug',
        description: "Something isn't working",
        color: '#D73A4A',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'documentation',
        description: 'Improvements or additions to documentation',
        color: '#0075CA',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'duplicate',
        description: 'This issue or pull request already exists',
        color: '#CFD3D7',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'enhancement',
        description: ' New feature or request',
        color: '#A2EEEF',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'good first issue',
        description: 'Good for newcomers',
        color: '#7057FF',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'help wanted',
        description: 'Extra attention is needed',
        color: '#008672',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'invalid',
        description: "This doesn't seem right",
        color: '#E4E669',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'question',
        description: ' Further information is requested',
        color: '#D876E3',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'wontfix',
        description: 'This will not be worked on',
        color: '#FFFFFF',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;

    await queryInterface.bulkDelete(
      'labels',
      {
        title: {
          [Op.in]: [
            'bug',
            'documentation',
            'duplicate',
            'enhancement',
            'good first issue',
            'help wanted',
            'invalid',
            'question',
            'wontfix',
          ],
        },
      },
      {},
    );
  },
};
