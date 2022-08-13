jQuery(document).ready(function($) {
  $("#main-navigation .sf-menu, #main-navigation .content>ul.menu, #main-navigation ul.main-menu").wrap("<div class=\'meanmenu-wrapper\'></div>");
  $("#main-navigation .meanmenu-wrapper").meanmenu({
    meanScreenWidth: "767",
    meanRemoveAttrs: true,
    meanMenuContainer: "#header-inside",
    meanMenuClose: ""
  });

  $("#header-top .sf-menu, #header-top .content>ul.menu").wrap("<div class=\'header-top-meanmenu-wrapper\'></div>");
  $("#header-top .header-top-meanmenu-wrapper").meanmenu({
    meanScreenWidth: "767",
    meanRemoveAttrs: true,
    meanMenuContainer: "#header-top-inside",
    meanMenuClose: ""
  });
});
