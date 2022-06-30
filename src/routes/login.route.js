const express = require('express')
const router = express.Router()
const loginController =   require('../controllers/login.controller');
router.get('/', loginController.findAll);
router.post('/', loginController.create);
router.get('/:id', loginController.findById);
router.put('/:id', loginController.update);
router.delete('/:id', loginController.delete);
module.exports = router

