'use strict';
const List = require('../models/list.model');
exports.findAll = function(req, res) {
List.findAll(function(err, List) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', List);
  res.send(List);
});
};
exports.create = function(req, res) {
const new_list = new List(req.body);
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
List.create(new_list, function(err, List) {
  if (err)
  res.send(err);
  res.json({error:false,message:"List added successfully!",data:List});
});
}
};
exports.findById = function(req, res) {
List.findById(req.params.boardID, function(err, List) {
  if (err)
  res.send(err);
  res.json(List);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    List.update(req.params.boardID, new List(req.body), function(err, List) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'List successfully updated' });
});
}
};
exports.delete = function(req, res) {
List.delete( req.params.boardID, function(err, List) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'List successfully deleted' });
});
};