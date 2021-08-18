"use strict";

$(document).ready(function () {
  // top nav
  var headerHeight = $("header.sticky").outerHeight() + "px";
  $(".top-navbar").css("top", headerHeight); // offcanvas

  var offcanvas = $(".offcanvas");
  var offcanvasWidth = offcanvas.outerWidth() + "px";
  $(".offcanvas-right").css("right", "-" + offcanvasWidth);
  $(".offcanvas-toggle").click(function (e) {
    e.preventDefault();
    var target = $('.offcanvas[data-offcanvas-toggle="false"]');
    var status = $(target).attr("data-offcanvas-toggle");

    if (status === "false") {
      var modalBackdrop = "<div class=\"modal modal-fade modal-backdrop bg-transparent\"></div>";
      $("body").append(modalBackdrop);
      $(".modal-backdrop").fadeIn();
      $(".offcanvas-right").css("right", 0);
      $(target).css("visibility", "visible").attr("data-offcanvas-toggle", "true");
    }
  });
  $(".offcanvas-closeBtn").click(function (e) {
    e.preventDefault();
    offcanvasClose();
  });
  $("body").on("click", ".modal-backdrop", function (e) {
    if (!offcanvas.is(e.target) && offcanvas.has(e.target).length === 0) {
      offcanvasClose();
    }
  });

  function offcanvasClose() {
    var status = $(offcanvas).attr("data-offcanvas-toggle");

    if (status === "true") {
      $(".modal-backdrop").fadeOut().remove();
      $(offcanvas).css("visibility", "hidden").attr("data-offcanvas-toggle", "false");
      $(".offcanvas-right").css("right", "-" + offcanvasWidth);
    }
  }
});
//# sourceMappingURL=all.js.map
