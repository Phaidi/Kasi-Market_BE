const router = require('express').Router()
const authController = require('../controllers/authController')
const itermController = require('../controllers/itermController')



router.route('/').get(itermController.getAllIterms).post(itermController.createIterm)


module.exports = router;