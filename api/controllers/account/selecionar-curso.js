/**
 * Module dependencies
 */

// ...


/**
 * account/selecionar-curso.js
 *
 * Selecionar curso.
 */
module.exports = async function selecionarCurso(req, res) {
	console.log(req.me)
	if (req.route.methods.get) {
		let cursos = await Curso.find()
		let nomeCursoAtual = null
		cursos.forEach((ele) => {
			if (ele.id == req.me.curso) {
				nomeCursoAtual = ele.nome
			}
		})
		let resp = {
			title: 'Selecionar Curso',
			nomeCursoAtual,
			cursos
		}
		return res.view('pages/account/selecionar-curso', resp)
	} else {
		let { id } = req.me
		let { select } = req.body
		let cursoOk = await Curso.findOne({ nome: select })
		let userOk = await User.updateOne(id).set({ curso: cursoOk.id })
		res.redirect('/account')
	}
	return res.ok()

};
