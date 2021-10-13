$(document).ready(function () {
  $("#btn-click").click(function () {
    alert("you clicked !!!!");
  });

  $("#tabs").tabs();
  $("ul").sortable({ axis: "x", containment: "#tabs" });
  $("ol").sortable({ axis: "y", containment: "#tabs" });
});
