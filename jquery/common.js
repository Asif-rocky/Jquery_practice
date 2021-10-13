$(document).ready(function () {
  $("#btn-click").click(function () {
    alert("you clicked !!!!");
  });

  $("#tabs").tabs();
  $("ul").sortable({ axis: "x", containment: "#tabs" });
  $("ol").sortable({ axis: "y", containment: "#tabs" });
  $("#btn-challenge").click(function () {
    $("#button-dialog").dialog({
      width: 400,
      resizable: false,
      modal: true,
      buttons: {
        "Add a new challenge": function () {
          var inptValue = $("#inpt").val();
          var liHtml =
            "<li><a href='#" + inptValue + "'>" + inptValue + "</a></li>";
          $("#tabs-ul").append(liHtml);
          $("<ol id='" + inptValue + "'></ol>").appendTo("#tabs");
          $("#tabs").tabs("refresh");
          var tabCount = $("#tabs .ui-tabs-nav li").length;
          $("#tabs").tabs("option", "active", tabCount - 1);
          $("#inpt").val("");
          $(this).dialog("close");
        },
      },
    });
  });
});
