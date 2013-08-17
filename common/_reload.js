var db = require('../library/mongo.js').db;
var async = require('async');
var fs = require('fs');

async.auto({
	readAllFiles : function(cb){
		fs.readdir('./data', cb);
	},
	cleanDB : ['readAllFiles',function(cb,res){
		var files = res.readAllFiles;
		var remove_ctr = 0;
		for(var i in files){
			var table = files[i].replace(".json","");
			var content = {};
			content.table = table;
			content.condition = {};
			db.remove(content,function(err,result){
				remove_ctr++;
				if(remove_ctr >=files.length){
					cb(err,result);
				}
			});
		}
	}],
	populateData : ['cleanDB',function(cb,res){
		var files = res.readAllFiles;
		var insert_ctr = 0;
		for(var i in files){
			var table = files[i].replace(".json","");
			console.log(files[i]);
			var record = require("./data/"+files[i]);
			var content = {};
			content.table = table;
			content.record = record;
			console.log(content);
			db.add(content,function(err,result){
				console.log(result);
				insert_ctr++;
				if(insert_ctr >= files.length){
					cb(err,result);
				}
			});
		}
	}]
},function(){
	return true;
});