'use strict';
const Board = require('../models/board.model');
exports.findAll = function(req, res) {
Board.findAll(function(err, Board) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', Board);
  res.send(Board);
});
};
exports.create = function(req, res) {
const new_board = new Board(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Board.create(new_board, function(err, Board) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Board added successfully!",data:Board});
});
}
};
exports.findById = function(req, res) {
Board.findById(req.params.boardID, function(err, Board) {
  if (err)
  res.send(err);
  res.json(Board);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Board.update(req.params.boardID, new Board(req.body), function(err, Board) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Board successfully updated' });
});
}
};
exports.delete = function(req, res) {
Board.delete( req.params.boardID, function(err, Board) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Board successfully deleted' });
});
};