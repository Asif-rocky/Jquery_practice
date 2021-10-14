$(document).ready(function () {
  $("#btn-click").click(function () {
    alert("you clicked !!!!");
  });

  $("#tabs").tabs();
  $("ul").sortable({ axis: "x", containment: "#tabs" });
  $("ol").sortable({ axis: "y", containment: "#tabs" });
  $("#btn-challenge").click(function () {
    $("#tabs").tabs({
      activate: function (event, ui) {
        ui.newPanel.css("display", "flex");
      },
    });
    $("#tabs").css("height", "auto");
    $("#button-dialog").html("");
    dialogCreate("challenge");
    $("#button-dialog").dialog({
      width: 450,
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

  $("#btn-task").click(function () {
    var currentTab = $("ul> .ui-tabs-active").attr("aria-controls");
    var tabId = "#" + currentTab;
    $("#button-dialog").html("");
    dialogCreate("task");
    $("#button-dialog").dialog({
      width: 400,
      resizable: false,
      modal: true,
      buttons: {
        "Add a new task/challenge": function () {
          var inptValue = $("#inpt").val();
          var liHtml = "<li>" + inptValue + "</li>";
          $(tabId).append(liHtml);
          $("#tabs").tabs("refresh");
          var tabCount = $("#tabs .ui-tabs-nav li").length;
          $("#tabs").tabs("option", "active", tabId);
          $("#inpt").val("");
          $(this).dialog("close");
        },
      },
    });
  });

  function dialogCreate(name) {
    var name = name + " " + "Name";
    var html =
      "<label for=name>" +
      name +
      ":</label>" +
      "<input id='inpt' type='text' style='margin: 2px; margin-left:10px;'>";
    $("#button-dialog").append(html);
    $("#button-dialog").prop("title", "Enter the new " + name);
  }
});
