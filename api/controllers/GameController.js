/**
 * GameController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    trex: async (req, res) => {
        res.view('pages/game', { title: 'Trex' })
    },
    pontuacao: async (req, res) => {
        let { pontuacao } = req.body

        let jogadaOk = await Jogada.findOne({ user: req.me.id })
        if (jogadaOk) {
            if (pontuacao > jogadaOk.pontuacao) {
                let newJogada = {
                    pontuacao,
                    data: Date.now()
                }
                let jogadaUpdate = await Jogada.updateOne({ user: req.me.id }).set(newJogada)
            }
        } else {
            let newJogada = {
                user: req.me.id,
                pontuacao,
                data: Date.now()
            }
            await Jogada.create(newJogada)
        }
    }
};