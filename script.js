// function fullscreen(){
//   alert("take window to full screen to Experience better");
// }
// setTimeout(fullscreen, 2000)

var box = document.getElementById("box");
var switchoff = document.getElementById("switchoff");
var audio = document.getElementById("audio");
var taskbar = document.getElementById("taskbar");
var app = document.getElementById("app");
var empty = document.getElementById("empty");
var vss = document.getElementById("vss");
var visualcode1 = document.getElementById("visualcode");
var open = document.getElementById("open");
open.style.bottom = "-800px";
visualcode1.style.bottom = "-1100px";
var apps = document.getElementById("app");
var innerdiv = document.getElementById("innerdiv");
var timedate = document.getElementById("time");
var tree = document.getElementById("date");
var datee = new Date();
var daate = datee.getDate();
var monthh = datee.getMonth();
var yearr = datee.getFullYear();
console.log(monthh + 1);
var hourr = datee.getHours();
var minutess = datee.getMinutes();
timedate.innerText = `${hourr} : ${minutess}  `;
tree.innerText = `${daate} - ${monthh} - ${yearr}`;

innerdiv.addEventListener("click", getapps);
function getapps() {
  if (open.style.bottom == "-800px") {
    open.style.bottom = "55px";
  } else if (open.style.bottom == "55px") {
    open.style.bottom = "-800px";
  }
}
vss.addEventListener("click", getvisualcode1);
function getvisualcode1() {
  if (visualcode1.style.bottom == "-1100px") {
    visualcode1.style.bottom = "70px";
  } else if (visualcode1.style.bottom == "70px") {
    visualcode1.style.bottom = "-1100px";
  }
}
visualcode1.addEventListener("click", songchange);
function songchange() {
  audio.src = "Excuses - Ap Dhillon.mp3";
}
visualcode1.addEventListener("click", songchange2);
function songchange2() {
  audio.src = "Most Wanted.mp3";
}
document.getElementById("pcapp").addEventListener("click", () => {
  if (document.getElementById("thisPC").style.bottom == "100px") {
    document.getElementById("thisPC").style.bottom = "-650px";
  } else {
    document.getElementById("thisPC").style.bottom = "100px";
  }
});
document.getElementById("closepcbtn").addEventListener("click", () => {
  if (document.getElementById("thisPC").style.bottom == "100px") {
    document.getElementById("thisPC").style.bottom = "-650px";
  }
});
document.getElementById("ctrlapp").addEventListener("click", () => {
  if (document.getElementById("controlpanel").style.bottom == "100px") {
    document.getElementById("controlpanel").style.bottom = "-950px";
  } else {
    document.getElementById("controlpanel").style.bottom = "100px";
  }
});
document.getElementById("closectrlbtn").addEventListener("click", () => {
  if (document.getElementById("controlpanel").style.bottom == "100px") {
    document.getElementById("controlpanel").style.bottom = "-950px";
  }
});
document.getElementById("appapp").addEventListener("click", () => {
  if (document.getElementById("appstore").style.bottom == "100px") {
    document.getElementById("appstore").style.bottom = "-950px";
  } else {
    document.getElementById("appstore").style.bottom = "100px";
  }
});
document.getElementById("closeappbtn").addEventListener("click", () => {
  if (document.getElementById("appstore").style.bottom == "100px") {
    document.getElementById("appstore").style.bottom = "-950px";
  }
});
document.getElementById("wifibtn").addEventListener("click", () => {
  if (document.getElementById("control").style.right == "10px") {
    document.getElementById("control").style.right = "-550px";
  } else {
    document.getElementById("control").style.right = "10px";
  }
});
document.getElementById("setapp").addEventListener("click", () => {
  if (document.getElementById("setting").style.bottom == "100px") {
    document.getElementById("setting").style.bottom = "-950px";
  } else {
    document.getElementById("setting").style.bottom = "100px";
  }
});
document.getElementById("closesetbtn").addEventListener("click", () => {
  if (document.getElementById("setting").style.bottom == "100px") {
    document.getElementById("setting").style.bottom = "-950px";
  }
});
document.getElementById("vsapp").addEventListener("click", () => {
  if (document.getElementById("vscode").style.bottom == "50px") {
    document.getElementById("vscode").style.bottom = "-750px";
  } else {
    document.getElementById("vscode").style.bottom = "50px";
  }
});
document.getElementById("closevsbtn").addEventListener("click", () => {
  if (document.getElementById("vscode").style.bottom == "50px") {
    document.getElementById("vscode").style.bottom = "-750px";
  }
});
document.getElementById("widgetapp").addEventListener("click", () => {
  if (document.getElementById("first_widget").style.right == "50px") {
    document.getElementById("first_widget").style.right = "-550px";
  } else {
    document.getElementById("first_widget").style.right = "50px";
  }
});
document.getElementById("widgetapp").addEventListener("click", () => {
  if (document.getElementById("second_widget").style.right == "50px") {
    document.getElementById("second_widget").style.right = "-550px";
  } else {
    document.getElementById("second_widget").style.right = "50px";
  }
});
document.getElementById("widgetapp").addEventListener("click", () => {
  if (document.getElementById("third_widget").style.right == "50px") {
    document.getElementById("third_widget").style.right = "-550px";
  } else {
    document.getElementById("third_widget").style.right = "50px";
  }
});
document.getElementById("searchapp").addEventListener("click", () => {
  if (document.getElementById("searchbar").style.bottom == "150px") {
    document.getElementById("searchbar").style.bottom = "-550px";
  } else {
    document.getElementById("searchbar").style.bottom = "150px";
  }
});
document.addEventListener("contextmenu", () => {
  if(document.getElementById('refresh').style.bottom == "-400px"){
      document.getElementById('refresh').style.bottom = "300px";
  }
  else{
      document.getElementById('refresh').style.bottom = "-400px";
  }
});