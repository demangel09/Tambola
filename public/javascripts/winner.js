var socket = io.connect();
var timers = new Array();

$(document).ready(function() {
	var timer;
	$(".boxes-75").html("");
	for(var i=1; i<=75;i++){
		var input = "<div class='span1' id='boxee-"+ i +"'><input type='text', class='input-mini winning-box', name=lucky_no[]></div>";
		$(".boxes-75").html($(".boxes-75").html() + input);
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

});

function blinkme(name){
	timers.push({time:setInterval(function(){
		 $("#"+name).fadeIn().delay(50).fadeOut();
	},1000),name:name});
}
