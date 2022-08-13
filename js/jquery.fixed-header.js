jQuery(document).ready(function($) {
  let	headerTopHeight = $("#header-top").outerHeight(),
    headerHeight = $("#header").outerHeight();

  $(window).scroll(function() {
    if(($(this).scrollTop() > headerTopHeight+headerHeight) && ($(window).width() > 767)) {
      $("body").addClass("onscroll");
      if (($("#site-name").length > 0) && ($("#logo").length > 0)) {
        $(".onscroll #logo").addClass("hide");
      }

      if ($("#banner").length > 0) {
        $("#banner").css("marginTop", (headerHeight)+"px");
      } else if ($("#page-intro").length > 0) {
        $("#page-intro").css("marginTop", (headerHeight)+"px");
      } else {
        $("#page").css("marginTop", (headerHeight)+"px");
      }
    } else {
      $("body").removeClass("onscroll");
      $("#logo").removeClass("hide");
      $("#page,#banner,#page-intro").css("marginTop", (0)+"px");
    }
  });
});
