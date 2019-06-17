/**
 * CursoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: async (req, res) => {
        res.view('pages/curso/index', {
            title: 'Curso', cursos: [
                { nome: 'Ciencia da Computação', sigla: 'ie07', id: 2 }
            ]
        })
    },
    create: async (req, res) => { },
    read: async (req, res) => { },
    update: async (req, res) => { },
    delete: async (req, res) => { },
};

