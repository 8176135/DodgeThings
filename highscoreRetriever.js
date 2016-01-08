var pageNum = 1;
var ready = false;
var canNext = true;
var leaderboardTable = document.getElementById("highscoreTable");
var xmlHighscore;
var xmlReq = new XMLHttpRequest(
{
  mozSystem: true
});
xmlReq.open("GET", "leaderboard.xml", true);
xmlReq.onreadystatechange = function()
{
  if (xmlReq.readyState == 4 && xmlReq.status == 200)
  {
    xmlHighscore = xmlReq.responseXML;
    ready = true;
    if (pageNum == 1) {
      leaderboardTable.rows[1].style.color = "gold";
      leaderboardTable.rows[2].style.color = "silver";
      leaderboardTable.rows[3].style.color = "#CD7F32";
      
    }
    for (var i = 1; i <= 25; i++)
    {
      if (typeof xmlHighscore.getElementsByTagName("name")[i - 1] === "undefined")
      {
        leaderboardTable.rows[i].cells[0].innerHTML = "";
        leaderboardTable.rows[i].cells[1].innerHTML = "";
        leaderboardTable.rows[i].cells[2].innerHTML = "";
      }
      else
      {
        leaderboardTable.rows[i].cells[0].innerHTML = i;
        leaderboardTable.rows[i].cells[1].innerHTML = xmlHighscore.getElementsByTagName("name")[i - 1].childNodes[0].nodeValue.replace(new RegExp("\\+", 'g'), " ");
        leaderboardTable.rows[i].cells[2].innerHTML = xmlHighscore.getElementsByTagName("score")[i - 1].childNodes[0].nodeValue;
      }

    }
  }
};
xmlReq.send();

function showNextPage()
{
  if (ready === true && canNext === true)
  {
    pageNum += 1;
    if (pageNum != 1) {

      leaderboardTable.rows[1].style.color = "white";
      leaderboardTable.rows[2].style.color = "white";
      leaderboardTable.rows[3].style.color = "white";
    }
    document.getElementById("pageNumber").innerHTML = pageNum;
    for (var i = 1; i <= 25; i++)
    {
      if (typeof xmlHighscore.getElementsByTagName("name")[(pageNum - 1) * 25 + i - 1] === "undefined")
      {
        leaderboardTable.rows[i].cells[0].innerHTML = "";
        leaderboardTable.rows[i].cells[1].innerHTML = "";
        leaderboardTable.rows[i].cells[2].innerHTML = "";
        canNext = false;
      }
      else
      {
        leaderboardTable.rows[i].cells[0].innerHTML = i;
        leaderboardTable.rows[i].cells[1].innerHTML = xmlHighscore.getElementsByTagName("name")[(pageNum - 1) * 25 + i - 1].childNodes[0].nodeValue.replace(new RegExp("\\+", 'g'), " ");
        leaderboardTable.rows[i].cells[2].innerHTML = xmlHighscore.getElementsByTagName("score")[(pageNum - 1) * 25 + i - 1].childNodes[0].nodeValue;
      }
    }
  }
}

function showPreviousPage()
{
  if (ready === true && pageNum > 1)
  {
    pageNum -= 1;
    canNext = true;
    document.getElementById("pageNumber").innerHTML = pageNum;
    if (pageNum == 1) {
      leaderboardTable.rows[1].style.color = "gold";
      leaderboardTable.rows[2].style.color = "silver";
      leaderboardTable.rows[3].style.color = "#CD7F32";
    }
    for (var i = 1; i <= 25; i++)
    {
      if (typeof xmlHighscore.getElementsByTagName("name")[(pageNum - 1) * 25 + i - 1] === "undefined")
      {
        leaderboardTable.rows[i].cells[0].innerHTML = "";
        leaderboardTable.rows[i].cells[1].innerHTML = "";
        leaderboardTable.rows[i].cells[2].innerHTML = "";
        canNext = false;
      }
      else
      {
        leaderboardTable.rows[i].cells[0].innerHTML = i;
        leaderboardTable.rows[i].cells[1].innerHTML = xmlHighscore.getElementsByTagName("name")[(pageNum - 1) * 25 + i - 1].childNodes[0].nodeValue.replace(new RegExp("\\+", 'g'), " ");
        leaderboardTable.rows[i].cells[2].innerHTML = xmlHighscore.getElementsByTagName("score")[(pageNum - 1) * 25 + i - 1].childNodes[0].nodeValue;
      }
    }
  }

}
