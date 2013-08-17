
$(document).ready(function() {
      $("table[class*='table']").dataTable({
        "bJQueryUI": true,
        "bStateSave": true
      });
      $('#box_type').change(function(){
    	  $(".boxlist").html("");
    	  for(var i=1; i<=Number($(this).val());i++){
    		  var input = "<input type='text', class='input-mini', name=lucky_no[]>";
    		  $(".boxlist").html($(".boxlist").html() + input);
    	  }
      });
      $('#box_type').change();
});