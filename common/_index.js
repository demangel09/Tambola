var db = require('../apps/Library/mongo.js').db;
var async = require('async');

async.auto({
	indexTables : function(cb){
		var tables = require('./index.json');
		for(var i in tables){
			var content = {};
			content.table = tables[i].table;
			content.record = tables[i].record;
			content.option = tables[i].option;
			db.ensureIndex(content,function(err,result){
			    if(err){
			          console.log(err);
			    }
			    else{
			           console.log("===============================");
			           console.log("======="+tables[i].table+" index loaded=========");
			           console.log("===============================");
			    }
			});
		}
	}
},function(){
	return true;
});

