let points = 0;
let upgrades = 0;
document.getElementById("anzeigen").innerText = points;
function klick() {
  points = points + 1 + upgrades;
  document.getElementById("anzeigen").innerText = points;
}
function upgrade() {
  if (points >= 10) {
    upgrades = upgrades + 1;
    points = points - 10;
    document.getElementById("anzeigen").innerText = points;
  }
}
