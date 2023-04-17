let audio = new Audio("./vine.mp3");
let poin = 0;
let audiodown = new Audio("./down.mp3");

var backsound = document.getElementById("backsounds");
backsounds.volume = 0.4; // 50% volume

function mouseklik() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }

  document.getElementById("johncena").src = "./socialcreditplus.jpg";

  setTimeout(function () {
    document.getElementById("johncena").src = "./johncena.png";
  }, 200);

  poin += 15;
  document.getElementById("poin").innerText = poin;

  //jika poin melebihi 105
  if (poin >= 105) {
    document.getElementById("words").innerHTML = "Gabut?";
  }
  //jika poin melenihi 300
  if (poin >= 300) {
    document.getElementById("words").innerHTML = "mending turu";
  }
  //jika poin melebihi 500
  if (poin >= 500) {
    poin -= 999;
    document.getElementById("words").innerHTML = "";
    document.getElementById("johncena").src = "./socialcreditdown.jpg";
    audiodown.play();
  }
}

console.log("made by nthadtya");
