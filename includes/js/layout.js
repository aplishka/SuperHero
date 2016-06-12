$(function() {

  // Hero layout controls
  $("li#heroInfo").click(function() {
    $("#heroStatsInfo").removeClass("is-active");
    $("#heroInfoColumn .statsInfo").addClass("hidden");
    $("#heroPowerInfo").removeClass("is-active");
    $("#heroInfoColumn .powerInfo").addClass("hidden");

    $("li#heroInfo").addClass("is-active");
    $("#heroInfoColumn .info").removeClass("hidden");
  });

  $("#heroStatsInfo").click(function() {
    $("li#heroInfo").removeClass("is-active");
    $("#heroInfoColumn .info").addClass("hidden");
    $("#heroPowerInfo").removeClass("is-active");
    $("#heroInfoColumn .powerInfo").addClass("hidden");

    $("#heroStatsInfo").addClass("is-active");
    $("#heroInfoColumn .statsInfo").removeClass("hidden");
  });

  $("#heroPowerInfo").click(function() {
    $("li#heroInfo").removeClass("is-active");
    $("#heroStatsInfo").removeClass("is-active");
    $("#heroInfoColumn .info").addClass("hidden");
    $("#heroInfoColumn .statsInfo").addClass("hidden");

    $("#heroPowerInfo").addClass("is-active");
    $("#heroInfoColumn .powerInfo").removeClass("hidden");
  });

  // Villain layout controls
  $("li#villainInfo").click(function() {
    $("#villainStatsInfo").removeClass("is-active");
    $("#villainInfoColumn .statsInfo").addClass("hidden");
    $("#villainPowerInfo").removeClass("is-active");
    $("#villainInfoColumn .powerInfo").addClass("hidden");


    $("li#villainInfo").addClass("is-active");
    $("#villainInfoColumn .info").removeClass("hidden");
  });

  $("#villainStatsInfo").click(function() {
    $("li#villainInfo").removeClass("is-active");
    $("#villainInfoColumn .info").addClass("hidden");
    $("#villainPowerInfo").removeClass("is-active");
    $("#villainInfoColumn .powerInfo").addClass("hidden");

    $("#villainStatsInfo").addClass("is-active");
    $("#villainInfoColumn .statsInfo").removeClass("hidden");
  });

  $("#villainPowerInfo").click(function() {
    $("li#villainInfo").removeClass("is-active");
    $("#villainStatsInfo").removeClass("is-active");
    $("#villainInfoColumn .info").addClass("hidden");
    $("#villainInfoColumn .statsInfo").addClass("hidden");

    $("#villainPowerInfo").addClass("is-active");
    $("#villainInfoColumn .powerInfo").removeClass("hidden");
  });
});
