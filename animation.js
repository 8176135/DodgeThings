var infoUp = true;
var leaderUp = true;

function GoToLeaderboard() {
  $("#highscoreBoardPlace").slideDown(20);
  infoUp = false;
  window.location.replace(window.location.href.replace(new RegExp("#.*$"),"") + "#leaderboardLbl");
}

$(document).ready(function()
{
  $("#infoSeg").slideUp(1);
  $("#highscoreBoardPlace").slideUp(1);
  $("#instruc").click(function()
  {
    if (infoUp === true)
    {
      $("#infoSeg").slideDown(1000);
      infoUp = false;
    }
    else
    {
      $("#infoSeg").slideUp(1000);
      infoUp = true;
    }
  });
  $("#leaderboardLbl").click(function()
  {
    if (infoUp === true)
    {
      $("#highscoreBoardPlace").slideDown(1000);
      infoUp = false;
    }
    else
    {
      $("#highscoreBoardPlace").slideUp(1000);
      infoUp = true;
    }
  });
});
