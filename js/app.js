$('.change-carousel').click(function() {
  var value = parseInt($(this).attr("data-value"));
  // Change carousel item and nav dot
  $('.carousel-items > div:eq(' + (value-1) + '),.carousel-nav > span:eq(' + (value-1) + ')').addClass('active');
  $('.carousel-items > div:not(:eq(' + (value-1) + ')),.carousel-nav > span:not(:eq(' + (value-1) + '))').removeClass('active');
  // Update prev and next value
  var items = $(".carousel-nav > span").length;
  $('.prev').attr("data-value", (value == 1 ? items : value-1));
  $('.next').attr("data-value", (value == items ? 1 : value+1));
});
