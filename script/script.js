$(document).ready(function(){
  $('#projects .thumbnail').hover(function(){
    $(this).children(".cust-caption").slideDown();
  },
  function(){
    $(this).children(".cust-caption").fadeOut();
  });
  $("#navbar a.hash").click( function(e) 
                            {
    e.preventDefault();
    var hash = this.hash;
    var scrollOffset = $(this.hash).offset().top;
    $('html, body').animate({
      scrollTop: scrollOffset
    }, 500, function(){
      window.location.hash = hash;
    }) 
  })
});