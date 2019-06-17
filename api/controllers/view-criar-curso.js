module.exports = {


  friendlyName: 'View criar curso',


  description: 'Display "Criar curso" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/curso/criar-curso'
    }

  },


  fn: async function () {

    // Respond with view.
    return {title: 'Criar curso'};

  }


};
