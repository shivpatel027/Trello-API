'use strict';
var dbConn = require('./../../config/db.config');
//Board object create
var Board = function(board){
  this.name     = board.name;
};
Board.create = function (newBrd, result) {
dbConn.query("INSERT INTO board set ?", newBrd, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Board.findById = function (id, result) {
dbConn.query("Select * from board where id = ?", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Board.findAll = function (result) {
dbConn.query("Select * from board", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('board : ', res);
  result(null, res);
}
});
};
Board.update = function(id, Board, result){
dbConn.query("UPDATE board SET name=?, WHERE id = ?", [Board.name, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Board.delete = function(id, result){
dbConn.query("DELETE FROM board WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Board;