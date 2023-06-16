const pintu = document.querySelectorAll(".pintu");
const maling = document.querySelectorAll(".maling");
const skor = document.querySelector(".skor");
const time = document.querySelector(".time");
const bonk = new Audio("sound/bonkk.mp3");
const bgsound = new Audio("sound/bgs.mp3")

let temp = 0;
let done = false;
let xxx = 1;
let durasi = parseInt(time.innerHTML);
let timeRange = null;

const pemain = {
  nickname: null,
  level: null,
  score: null,
};

const level = {
  easy: [1000, 2000],
  medium: [500, 1000],
  hard: [250, 600],
};

function start() {
  getData();
  
  if (pemain.level == "easy") {
    timeRange = level.easy;
  } else if (pemain.level == "medium") {
    timeRange = level.medium;
  } else {
    timeRange = level.hard;
  }

  bgsound.play()
  
  let timer = setInterval((e) => {
    if (!done) {
      durasi--;
      time.innerHTML = durasi;
    }

    if (durasi == 0) {
      done = true;

      clearInterval(timer);
      pushScore();
      location.replace("afterGame.html");
    }
  }, 1000);

  // reset
  reset();
  show(valid(rand(maling.length)));
}

function getData() {
  const level = localStorage.getItem("LEVEL");
  const nickname = localStorage.getItem("nickname");

  pemain.level = level;
  pemain.nickname = nickname;
}

function reset() {
  maling.forEach((e) => {
    e.classList.add("hide");
  });
}

function show(i) {
  const gambar = [
    "cewek.png",
    "cowok.png",
    "malingfix.png",
    "malingfix.png",
    "malingfix.png",
    "malingfix.png",
  ];

  temp = i;

  // ganti gambar dulu bos
  const gambarRandom = gambar[rand(gambar.length)];
  maling[i].style.backgroundImage = `url(../img/${
    // gambar[rand(gambar.length)]
    gambarRandom
  })`;
  if (gambarRandom == "malingfix.png") {
    maling[i].style.backgroundSize = "450px";
  } else {
    maling[i].style.backgroundSize = "230px";
  }
  maling[i].classList.remove("hide");

  console.log(timeRange);

  setTimeout(function () {
    // close
    maling[i].classList.add("hide");

    i = valid(rand(maling.length));
    if (!done) {
      show(i);
    }
  }, randRange(timeRange[0], timeRange[1]));
}

function valid(i) {
  if (i !== temp) {
    return i;
  } else {
    return valid(rand(maling.length));
  }
}

function rand(w) {
  return Math.floor(Math.random() * w);
}

function randRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pushScore() {
  const final_skor = skor.innerHTML;
  pemain.score = final_skor;

  let dataSkor;
  if (localStorage.getItem("dataSkor") == null) {
    dataSkor = [];
  } else {
    dataSkor = JSON.parse(localStorage.getItem("dataSkor"));
  }
  dataSkor.push(pemain);
  localStorage.setItem("dataSkor", JSON.stringify(dataSkor));
}

maling.forEach((m, i) => {
  m.addEventListener("click", (e) => {
    bonk.play()
    console.log(i);

    if (m.style.backgroundImage.slice(12, -2) == "malingfix.png") {
      skor.innerHTML = parseInt(skor.innerHTML) + 1;
    } else {
      skor.innerHTML = parseInt(skor.innerHTML) - 1;
    }

    m.classList.add("hide");
  });
});

start();
