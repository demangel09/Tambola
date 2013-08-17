module.exports = {

    MergeRecursive : function(obj1, obj2) {
          for (var p in obj2) {
            try {
              // Property in destination object set; update its value.
              if ( obj2[p].constructor==Object ) {
                obj1[p] = this.MergeRecursive(obj1[p], obj2[p]);
        
              } else {
                obj1[p] = obj2[p];
        
              }
        
            } catch(e) {
              // Property in destination object not set; create it and set its value.
              obj1[p] = obj2[p];
        
            }
          }
        
          return obj1;
    },
    stringToObject : function(key,value){
	var str = value;
	var keys = key.split(".");
	str = "{'" + keys[keys.length-1] + "':'"+ str + "'}";
	for(var j= ( keys.length-2 );j>=0;j--){
	str = "{'"+keys[j]+"':"+str+"}";	
	}
	return eval('('+str+')');
    },
    transformObject : function(obj){
        var nobj = {};
        for(var i in obj){
            var tobj = this.stringToObject(i,obj[i]);
            nobj = this.MergeRecursive(nobj,tobj);
        }
        for(var i in nobj){
            nobj[i] = this.parseNumber(nobj[i]);
            nobj[i] = this.parseJSON(nobj[i]);
        }
        return nobj;
    },
    parseNumber : function(n) {
			  if(!isNaN(parseFloat(n)) && isFinite(n)){
				  return parseFloat(n);
			  }
			  else{
				  return n;
			  }
    },
    isNumber : function(n){
			  if(!isNaN(parseFloat(n)) && isFinite(n)){
				  return true;
			  }
			  else{
				  return false;
			  }
    },
    parseBoolean : function(bool){
			if(bool == "true"){
				return true;
			}
			else if(bool == "false"){
				return false;
			}
			else{
				return bool;
			}
			
    },
    parseJSON : function(string){
			var result;
			try {
				result = JSON.parse(string);
			} catch (exception) {
				result = string;
			}
			
			return result;
    },
}