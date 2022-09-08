$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".profile-sidenav").sidenav({
    edge: "right",
  });
});
$(document).ready(function () {
  $(".fixed-action-btn").floatingActionButton();
  $(".dropdown-trigger").dropdown({
    alignment: "right",
    constrainWidth: false,
    coverTrigger: false,
    hover: false,
  });
  $(".collapsible").collapsible();
});
