
$(".block").click(function(){
  var userChosenBlock = $(this).attr("id");
  animatePress(userChosenBlock);
});

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){$("#" + currentColor).removeClass("pressed");}, 100);
}
