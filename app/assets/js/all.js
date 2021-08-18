$(document).ready(function () {
  // top nav
  let headerHeight = $("header.sticky").outerHeight() + "px";

  $(".top-navbar").css("top", headerHeight);

  // offcanvas
  let offcanvas = $(".offcanvas");
  let offcanvasWidth = offcanvas.outerWidth() + "px";
  $(".offcanvas-right").css("right", "-" + offcanvasWidth);

  $(".offcanvas-toggle").click(function (e) {
    e.preventDefault();

    let target = $('.offcanvas[data-offcanvas-toggle="false"]');
    let status = $(target).attr("data-offcanvas-toggle");

    if (status === "false") {
      let modalBackdrop = `<div class="modal modal-fade modal-backdrop opacity-0"></div>`;

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
    let status = $(offcanvas).attr("data-offcanvas-toggle");

    if (status === "true") {
      $(".modal-backdrop").fadeOut().remove();
      $(offcanvas).css("visibility", "hidden").attr("data-offcanvas-toggle", "false");
      $(".offcanvas-right").css("right", "-" + offcanvasWidth);
    }
  }
});
