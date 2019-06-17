/**
 * Curso.js
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
    nome: {
      required: true,
      type: 'string',
      maxLength: 64
    },
    sigla: {
      type: 'string',
      required: true,
      columnType: 'char(4)',
      maxLength: 4
    },
    descricao: {
      type: 'string',
      columnType: 'text'
    }
  },

};

