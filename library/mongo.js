var mongoq = require('mongoq');
var db = mongoq("mongodb://localhost/bingo");
var model = exports.db = {
		ObjectID : mongoq.mongodb.BSONPure.ObjectID,
		count : function(content,cb){
			db.collection(content.table)
			  .find(content.condition)
			  .count()
			  .done(function(result){
				  cb(null,result);
			  })
			  .fail(function(err){
				  console.log(err);
				  cb(err);
			  });
		},
		list : function(content,cb){
			db.collection(content.table)
			  .find(content.condition || {},content.columns || {})
			  .sort(content.sorting || {})
			  .skip(content.page || 0)
			  .limit(content.rows || 0)
			  .toArray()
			  .done(function(result){
				  cb(null,result);
			  })
			  .fail(function(err){
				  console.log(err);
				  cb(err);
			  });
		},
		item : function(content,cb){
			db.collection(content.table)
			  .findOne(content.condition || {},content.columns || {})
			  .done(function(result){
				  console.log(result);
				  cb(null,result);
			  })
			  .fail(function(err){
				  console.log(err);
				  cb(err);
			  });
		},
		add : function(content,cb){
		      db.collection(content.table)
		      .insert(content.record, {safe: true})
		      .done(function(result){
		        cb(null,result);
		      })
		      .fail( function( err ) {
		    	  console.log(err);
		    	  cb(err);
		      });
		},
		update : function(content,cb){
		        db.collection(content.table)
		        .update(content.condition, content.record, {safe: true})
		        .done(function(result){
		            cb(null,result);
		        })
		        .fail( function( err ) {
		        	console.log(err);
		            cb(err);
		        });
		},
		remove : function(content,cb){
		        db.collection(content.table)
		        .remove(content.condition, {safe: true})
		        .done(function(result){
		            cb(null,result);
		        })
		        .fail( function( err ) {
		        	console.log(err);
		            cb(err);
		        });
		},
        findAndModify : function(content,cb){
           db.collection(content.table)
           .findAndModify(content.condition,content.sorting,content.record,{new: true})
           .done(function(result){
              cb(null,result);
           })
           .fail( function( err ) {
		      console.log(err);
		      cb(err);
		   });
        },
        ensureIndex : function(content,cb){
            db.collection(content.table)
            .ensureIndex(content.record,content.option)
            .done(function(result){
                cb(null,result);
            })
            .fail( function( err ) {
		        console.log(err);
		        cb(err);
		    });
        }
};
module.exports.model = function(req,res,next){
	req.model = model;
	return next();
	};
