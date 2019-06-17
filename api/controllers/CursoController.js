/**
 * CursoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const Curso = require('../models/Curso')

module.exports = {
    index: async (req, res) => {
        let cursos = await Curso.find()

        res.view('pages/curso/index', {
            title: 'Curso', cursos
        })
    },

    create: async (req, res) => { 
        try{
            let {nome, sigla, descricao} = req.body
            let newCurso = {nome, sigla, descricao}
            let newCursoOk = await Curso.create(newCurso)
            res.redirect('/curso')
        }catch(err){
            console.log('deu erro')
            res.send('Erro ao cadastrar curso')
        }
    },

    read: async (req, res) => { },
    update: async (req, res) => { 
        
    },
    delete: async (req, res) => { },
};

