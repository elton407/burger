var orm = require("../config/orm.js");


var burger = {
	all: function(cb) {
		orm.all("burgers", function(res){
			cb(res);
			//console.log(res);
		});
	},
	insertInto: function(cols, vals, cb) {
    orm.insertInto("burgers", cols, vals, function(res) {
      cb(res);
    });
  	},
  	update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

//orm.all("burgers");
module.exports = burger;