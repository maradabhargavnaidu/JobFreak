function handleRightHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("contact").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById("guide").style.display = "none";
  document.getElementById("homespan").style.backgroundColor = "white";
  document.getElementById("homespan").style.color = "black";
  document.getElementById("contactspan").style.backgroundColor = "transparent";
  document.getElementById("contactspan").style.color = "white";
  document.getElementById("infospan").style.backgroundColor = "transparent";
  document.getElementById("infospan").style.color = "white";
  document.getElementById("guidespan").style.backgroundColor = "transparent";
  document.getElementById("guidespan").style.color = "white";
}
function handleRightContact() {
  document.getElementById("home").style.display = "none";
  document.getElementById("contact").style.display = "block";
  document.getElementById("info").style.display = "none";
  document.getElementById("guide").style.display = "none";
  document.getElementById("contactspan").style.backgroundColor = "white";
  document.getElementById("contactspan").style.color = "black";
  document.getElementById("homespan").style.backgroundColor = "transparent";
  document.getElementById("homespan").style.color = "white";
  document.getElementById("infospan").style.backgroundColor = "transparent";
  document.getElementById("infospan").style.color = "white";
  document.getElementById("guidespan").style.backgroundColor = "transparent";
  document.getElementById("guidespan").style.color = "white";
}
function handleRightInfo() {
  document.getElementById("home").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("info").style.display = "block";
  document.getElementById("guide").style.display = "none";
  document.getElementById("infospan").style.backgroundColor = "white";
  document.getElementById("infospan").style.color = "black";
  document.getElementById("homespan").style.backgroundColor = "transparent";
  document.getElementById("homespan").style.color = "white";
  document.getElementById("guidespan").style.backgroundColor = "transparent";
  document.getElementById("guidespan").style.color = "white";
  document.getElementById("contactspan").style.backgroundColor = "transparent";
  document.getElementById("contactspan").style.color = "white";
}
function handleRightGuide() {
  document.getElementById("home").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("info").style.display = "none";
  document.getElementById("guide").style.display = "block";
  document.getElementById("guidespan").style.backgroundColor = "white";
  document.getElementById("guidespan").style.color = "black";
  document.getElementById("homespan").style.backgroundColor = "transparent";
  document.getElementById("homespan").style.color = "white";
  document.getElementById("infospan").style.backgroundColor = "transparent";
  document.getElementById("infospan").style.color = "white";
  document.getElementById("contactspan").style.backgroundColor = "transparent";
  document.getElementById("contactspan").style.color = "white";
}
function handleNav() {
  document.getElementById("leftnav").classList.toggle("none");
  document.getElementById("leftnav").classList.toggle("block");
}
