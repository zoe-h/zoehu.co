

$(document).ready(function() {

  // Name typewriter

  $('.typewriter_name').typeIt({
       speed: 50,
       deleteSpeed: 50,
       cursor: false,
       autoStart: true,
       loop: true,
  })
  .tiType('ZOE WHO?')
  .tiPause(1000)
  .tiDelete(4)
  .tiPause(200)
  .tiType('HU.')
  .tiPause(2000)

// LOOP THROUGH MULTIPLE TYPEFACES

  var fonts = ["Helvetica", "Times"];
  var index = 0;
    $("html").click(function() {
      index++;
      if (index >= fonts.length)
        index = 0;

      $("body").css("font-family", fonts[index]);

    });

    $("a").click(function() {
      index--;
    });


// hover effects
function isTouchDevice(){
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

if(isTouchDevice()===true) {

}
else {



  // Instagram shenanigans

      $(function () {
        $('.instagram-link').on('click', function () {
          $('<span>See you on the other side :-)</span>').appendTo('.instagram');
          $('.instagram-link').off("mouseover");
          $('.instagram-link').off("mouseleave");
        });
      });

      $(function () {
        $('.instagram-link').on('mouseover', function () {
          $('<span>Go on... </span>').appendTo('.instagram');
        });
      });

      $(function () {
        $('.instagram-link').on('mouseleave', function () {
          $('<span>Go on... </span>').appendTo('.instagram');
        });
      });

      // Email shenanigans

      $(function () {
        $('.email-link').on('click', function () {
          $('<span>Yay!</span>').appendTo('.email');
          $('.email-link').off("mouseover");
          $('.email-link').off("mouseleave");
        });
      });

      $(function () {
        $('.email-link').on('mouseover', function () {
          $('<span>Say hi... </span>').appendTo('.email');
        });
      });

      $(function () {
        $('.email-link').on('mouseleave', function () {
          $('<span>Say hi... </span>').appendTo('.email');
        });
      });

}



});
