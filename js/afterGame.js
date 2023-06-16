function getAllData() {
  const result = document.querySelector("#result");
  const dataSkor = JSON.parse(localStorage.getItem("dataSkor"));

  skor = dataSkor.at(-1).score;
  result.innerHTML = `Kamu memukul maling sebanyak ${skor} kali`;
}

getAllData();

document.querySelector("#tangkap_lagi").addEventListener("click", (e) => {
  document.location.href = "inGame.html";
});
