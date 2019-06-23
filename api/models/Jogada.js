/**
 * Jogada.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      autoIncrement: true,
      unique: true,
      type: 'number'
    },
    jogador: {
      type: 'number',
      required: true
    },
    pontuacao: {
      type: 'number',
      required: true
    },
    data: {
      type: 'string',
      required: true,
      maxLength: 45
    },

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    // n/a

    user: {
      model: 'User'
    }
  },

};

