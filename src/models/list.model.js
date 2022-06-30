'use strict';
var dbConn = require('./../../config/db.config');
//list object create
var List = function(list){
  this.name = list.name;
};
List.create = function (newList, result) {
dbConn.query("INSERT INTO list set ?", newList, function (err, res) {
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
List.findById = function (boardID, result) {
dbConn.query("Select * from list where boardID = ? ", boardID, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
List.findAll = function (result) {
dbConn.query("Select * from list", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('list : ', res);
  result(null, res);
}
});
};
List.update = function(boardID, list, result){
dbConn.query("UPDATE list SET name = ?", [list.name, boardID], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
List.delete = function(boardID, result){
dbConn.query("DELETE FROM list WHERE boardID = ?", [boardID], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= List;