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
    },
    pontuacao_max: async (req, resp) => {
        let jogadaOk = await Jogada.findOne({ user: req.me.id })
        return resp.json(jogadaOk.pontuacao)
    },
    ranking: async (req, res) => {
        let jogadasOk = await Jogada.find()
        let jogadas = []
        console.log(jogadasOk)

        for (let i = 0; i < jogadasOk.length; i++) {
            let ele = jogadasOk[i]
            let user = await User.findOne({ id: ele.user })
            let data = new Date(parseInt(ele.data))
            data = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
            jogadas.push({
                jogador: user.fullName,
                pontuacao: ele.pontuacao,
                data
            })
        }

        let resp = {
            title: `Ranking`,
            jogadas
        }

        console.log(resp)

        return res.view('pages/ranking', resp)
    }
};