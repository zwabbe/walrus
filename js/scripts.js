$(document).ready(function() {
  $(".clickable").click(function() {
    var elmID = $(this).attr('id');

    $("#"+elmID+"-show").toggle();
    $("#"+elmID+"-hide").toggle();

  });
});