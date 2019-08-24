var clicks = 1;

var gameMarker = "X";

function changeMarkerToO() {
  gameMarker = "O";
  console.log("The O button was clicked!");
}

function changeMarkerToX() {
  gameMarker = "X";
  console.log("The X button was clicked!");
}
/*
function replyClick(ClickedID) {
  id = ClickedID;
}
*/

function changeMarker() {
  var target = event.target || event.srcElement;
  var id = target.id;
  console.log(id);
  //id = replyClick().id;
  //console.log(id);
  console.log("How many clicks? " + clicks);
  if (clicks % 2 == 0) {
    changeMarkerToX();
  }

  if (clicks % 2 != 0) {
    changeMarkerToO();
  }

  //document.getElementById(id).innerText = gameMarker;

  document.getElementById(id).innerText = gameMarker;

  console.log(
    "innerText is: " + document.getElementsByClassName("one").innerText
  );
  clicks += 1;
}
