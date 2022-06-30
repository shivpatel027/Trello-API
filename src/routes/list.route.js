const express = require('express')
const router = express.Router()
const listController =   require('../controllers/list.controller');
router.get('/', listController.findAll);
router.post('/', listController.create);
router.get('/:boardID', listController.findById);
router.put('/:boardID', listController.update);
router.delete('/:boardID', listController.delete);
module.exports = router

