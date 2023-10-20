console.log('I love you most always! <3');



let front = true;
let curId = 3;

function flipCard() {
  var text = document.getElementById("card-text");
  if (front) {
    text.innerHTML = "Back";
    front = false;
  } else {
    text.innerHTML = "Front";
    front = true;
  }
}

function selectSet(id) {
  var text = document.getElementById("card-text");
  text.innerHTML = id;
}

function favorite(e) {
  e.stopPropagation();
  var text = document.getElementById("card-text");
  text.innerHTML = "Favorite";
}

function addSet() {
  var sidebar = document.getElementById("side-bar");
  var button = document.createElement("button");
  button.setAttribute("class", "set-button");
  button.setAttribute("onclick", "selectSet(this.id)");
  button.setAttribute("id", curId);
  button.innerHTML = "Set " + curId;
  curId++;
  sidebar.insertBefore(button, sidebar.lastChild.previousSibling);
  
}