const express = require('express')
const router = express.Router()
const boardController =   require('../controllers/board.controller');
router.get('/', boardController.findAll);
router.post('/', boardController.create);
router.get('/:userID', boardController.findById);
router.put('/:userID', boardController.update);
router.delete('/:userID', boardController.delete);
module.exports = router

