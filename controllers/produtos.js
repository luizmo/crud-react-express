const api = require('../api');

const novoForm = (req, res) => {
    res.send('cadastrar/novo')
}

const novo = async(req, res) => {
    await api.create('produto', {
        produto: req.body.produto
    })
    res.redirect('/produtos')
}

const list = async(req, res) => {
    const produtos = await api.list('produtos')
    res.render('/produtos', { produtos }) 
}

const remove = async(req, res) => {
    await api.remove('produtos', req.params.id)
    res.redirect('/produtos')
}

const editForm = async(req, res) => {
    const produto = await api.get('produtos', req.params.id)
    res.render('produtos/editar', {
        produto
    })
}

const edit = async(req, res) => {
    await api.update('produtos', req.params.id , {
        produto: req.body.produto
    })
    res.redirect('/produtos')
}

module.exports = { novoForm, novo, list, remove, editForm, edit }