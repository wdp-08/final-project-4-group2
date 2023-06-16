const pintu = document.querySelectorAll(".pintu");
const maling = document.querySelectorAll(".maling");
const skor = document.querySelector(".skor");
const time = document.querySelector(".time");

let temp = 0;
let done = false;
let xxx = 1;
let durasi = parseInt(time.innerHTML);

function start() {
  let timer = setInterval((e) => {
    if (!done) {
      durasi--;
      time.innerHTML = durasi;
    }

    if (durasi == 0) {
      done = true;
      console.log(0)
      clearInterval(timer)
      pushScore()
      location.replace("afterGame.html");

    }
  }, 1000);

  // reset
  reset();
  show(valid(rand(maling.length)));
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
  const gambarRandom = gambar[rand(gambar.length)]
  maling[i].style.backgroundImage = `url(../img/${
    // gambar[rand(gambar.length)]
    gambarRandom
    })`;
  if (gambarRandom == "malingfix.png") {
    maling[i].style.backgroundSize = "450px"
  } else {
    maling[i].style.backgroundSize = "230px"
  }
  maling[i].classList.remove("hide");

  setTimeout(function () {
    // close
    maling[i].classList.add("hide");

    i = valid(rand(maling.length));
    if (!done) {
      show(i);
    }
  }, randRange(500, 1000));
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
  const final_skor = skor.innerHTML

  let dataSkor;
  if (localStorage.getItem("dataSkor") == null) {
    dataSkor = [];
  } else {
    dataSkor = JSON.parse(localStorage.getItem("dataSkor"))
  }
  dataSkor.push({
    score: final_skor,
  })
  localStorage.setItem("dataSkor", JSON.stringify(dataSkor));
}

maling.forEach((m, i) => {
  m.addEventListener("click", (e) => {
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