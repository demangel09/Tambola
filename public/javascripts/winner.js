var socket = io.connect();
var timers = new Array();

$(document).ready(function() {
	var timer;
	$(".boxes-75").html("");
	for(var i=1; i<=75;i++){
		var win = $("[name='winner']").val().split(",");
		if(win[i-1]){
		var input = "<div class='span1' id='boxee-"+ i +"'><input type='text', class='input-mini winning-box', value='"+ win[i-1]+"', name='lucky_no[]'></div>";		}
else{
var input = "<div class='span1' id='boxee-"+ i +"'><input type='text', class='input-mini winning-box', name='lucky_no[]'></div>";	
}
		$(".boxes-75").html($(".boxes-75").html() + input);
		if(i>1){
			if(!$("#boxee-"+i).children().val()){
				$("#boxee-"+i).hide();	
			}	
		}
		if(win.length > 1){
			$("#boxee-"+win.length+1).show();	
		}

	}

	$("[name='lucky_no[]']").focus(function(){
		for(var i in timers){
			if(timers[i].time){
				clearInterval(timers[i].time);
				$("#"+timers[i].name).fadeIn();
				timers.splice(i);
			}
		}
		$(this).click();
	});
	 $("[name='lucky_no[]']").change(function(){
		 
		 $(this).css("border","2px solid green");
		 var thisname = $(this).parent().attr("id");
		 var content = new Array();
		 $("[name='lucky_no[]']").each(function(){
			 if($(this).val()){
				 content.push(Number($(this).val()));
			 }
		 });
		 socket.emit('lucky',content);
		 blinkme(thisname);
	 });
		$("[name='lucky_no[]']").change(function(){
			if($(this).val()){
				$(this).parent().next().show();	
				}
		});
	});
function blinkme(name){
	timers.push({time:setInterval(function(){
		 $("#"+name).fadeIn().delay(50).fadeOut();
	},1000),name:name});
}
