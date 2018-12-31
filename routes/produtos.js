const express = require('express')
const router = express.Router()

const controller = require('../controllers/produtos')

router.get('/cadastrar/novo', controller.novoForm)
router.post('/cadastrar/novo', controller.novo )
router.get('/', controller.list)
router.get('/excluir/:id', controller.remove)
router.get('/editar/:id', controller.editForm )
router.post('/editar/:id', controller.edit)

module.exports = router