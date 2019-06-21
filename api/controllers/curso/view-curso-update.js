/**
 * Module dependencies
 */

// ...


/**
 * view-curso-update.js
 *
 * Display "Curso update" page.
 */
module.exports = async function viewCursoUpdate(req, res) {

	let id = req.param('id')
	let cursoOk = await Curso.findOne({ id })

	let resp = {
		title: `atualizar dados do curso`,
		sigla: cursoOk.sigla,
		nome: cursoOk.nome,
		descricao: cursoOk.descricao,
		id,
		update: true
	}

	return res.view('pages/curso/criar-curso', resp);

};
