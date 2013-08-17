
$(document).ready(function() {
      $("table[class*='table']").dataTable({
        "bJQueryUI": true,
        "bStateSave": true
      });
      $('#expiration').datepicker();
});