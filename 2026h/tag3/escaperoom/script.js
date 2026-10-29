let points = 0;
function pruefen() {
  let antwort = document.getElementById("antwort").value;
  if (antwort === "Das Feuer") {
    alert("Richtige Antwort!");
    points = points + 10;
    window.location.href = "level_2.html";
  } else {
    alert("Falsche Antwort!");
  }
}
function pruefen_2() {
  let antwort = document.getElementById("antwort_2").value;
  if (antwort === "Die Zukunft") {
    alert("Richtige Antwort!");
    points = points + 10;
    window.location.href = "level_3.html";
  } else {
    alert("Falsche Antwort!");
  }
}
function pruefen_3() {
  let antwort = document.getElementById("antwort_3").value;
  if (antwort === "Die Landkarte") {
    alert("Richtige Antwort!");
    points = points + 10;
    window.location.href = "level_4.html";
  } else {
    alert("Falsche Antwort!");
  }
}
function pruefen_4() {
  let antwort = document.getElementById("antwort_4").value;
  if (antwort === "Ein Loch") {
    alert("Richtige Antwort!");
    points = points + 10;
    window.location.href = "level_5.html";
  } else {
    alert("Falsche Antwort!");
  }
}
function button_9() {
  let eingabeFeld = document.getElementById("code");
  eingabeFeld.value += "9";
}
function button_detle() {
  document.getElementById("code").value = "";
}
function button_8() {
  let eingabeFeld = document.getElementById("code");
  eingabeFeld.value += "8";
}
function button_7() {
  let eingabeFeld = document.getElementById("code");
  eingabeFeld.value += "7";
}
function button_6() {
  let eingabeFeld = document.getElementById("code");
  eingabeFeld.value += "6";
}
function button_5() {
  let eingabeFeld = document.getElementById("code");
  eingabeFeld.value += "5";
}
function button_4() {
  let eingabeFeld = document.getElementById("code");
  eingabeFeld.value += "4";
}
function button_3() {
  let eingabeFeld = document.getElementById("code");
  eingabeFeld.value += "3";
}
function button_2() {
  let eingabeFeld = document.getElementById("code");
  eingabeFeld.value += "2";
}
function button_1() {
  let eingabeFeld = document.getElementById("code");
  eingabeFeld.value += "1";
}
function button_0() {
  let eingabeFeld = document.getElementById("code");
  eingabeFeld.value += "0";
}
function enter() {
  let eingegebenerCode = document.getElementById("code").value;
  if (eingegebenerCode === "67") {
    alert("67!");
    points = points + 10;
    window.location.href = "level_6.html";
  } else {
    alert("Falsche Antwort!");
  }
}
let position_x = 0;
let position_y = 0;

function checkCollision() {
  const spiler = document.getElementById("spiler");
  const door = document.getElementById("door");

  const spilerRect = spiler.getBoundingClientRect();
  const doorRect = door.getBoundingClientRect();

  if (
    spilerRect.left < doorRect.right &&
    spilerRect.right > doorRect.left &&
    spilerRect.top < doorRect.bottom &&
    spilerRect.bottom > doorRect.top
  ) {
    alert("Du hast es geschaft");
    points = points + 10;
    window.location.href = "level_7.html";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "d") {
    position_x = position_x + 10;
    document.getElementById("spiler").style.left = position_x + "px";
  }
  if (event.key === "a") {
    position_x = position_x + -10;
    document.getElementById("spiler").style.left = position_x + "px";
  }
  if (event.key === "s") {
    position_y = position_y + 10;
    document.getElementById("spiler").style.top = position_y + "px";
  }
  if (event.key === "w") {
    position_y = position_y + -10;
    document.getElementById("spiler").style.top = position_y + "px";
  }

  checkCollision();
});
