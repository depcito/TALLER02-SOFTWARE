const { Router } = require('express')
const controller = require('../controllers/pokeneaController')

const router = Router()

router.get('/api/pokenea', controller.getJson)
router.get('/', controller.getView)

module.exports = router
