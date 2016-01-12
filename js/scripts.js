jQuery(document).ready(function() {
  $("h1").click(function() {
    $("#answer").toggle();
    $("#question").toggle();
  })

  $("#slide1").click(function() {
    $("#answer").toggle();
    $("#question").toggle();
  })

  $("#slide2").click(function() {
    $("#answer2").toggle();
    $("#question2").toggle();
  })
})
