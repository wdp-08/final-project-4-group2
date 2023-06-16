// afterLogin.html;
document.addEventListener("DOMContentLoaded", function () {
  var nickname = localStorage.getItem("nickname");
  document.getElementById("result").textContent = nickname;
  highscore();
});

function highscore() {
  let getAllData = localStorage.getItem("dataSkor");
const globalData = getAllData ? JSON.parse(getAllData) : [];
const highscore = document.querySelector("#highscore")
const dataFilter = globalData.sort((a, b) => b.score - a.score);
highscore.innerHTML = dataFilter[0].score
}

function selectLevel(level) {
  swal.fire("Anda memilih level: " + level);
}

function redirectToHighscore() {
  window.location.href = "highscore.html";
}
function redirectToIngame() {
  const levelText = document.querySelector("p#levelText");
  localStorage.setItem("LEVEL", levelText.innerHTML);
  window.location.href = "inGame.html";
}

function selectLevel(level) {
  var levelText = document.getElementById("levelText");
  levelText.textContent = level;
}

function setDefaultLevel() {
  var levelText = document.getElementById("levelText");
  levelText.textContent = "normal";
}