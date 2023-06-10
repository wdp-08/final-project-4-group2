const tanah = document.querySelectorAll('.tanah')
const teman = document.querySelectorAll('.teman')
const score = document.querySelector('.score')
const radio = document.querySelectorAll('input[type=radio]')
const button = document.querySelectorAll('.button')
const setting = document.querySelectorAll('.setting')
const msg = document.querySelectorAll('.msg')
const rezz = document.querySelectorAll('.result')
const container = document.querySelector('.container')

const level = {
      easy: [1000, 2000],
      medium: [500, 1000],
      hard: [250, 600],
      set: function (o) {
            if (o == 'easy') {
                  return this.easy
            } else if (o == 'hard') {
                  return this.hard
            } else {
                  return this.medium
            }
      }
}

// SHOW

let temp = 0
let tempg = 0
let done = false
let point = 0
let category = 'easy'

function mulai() {
      setTimeout(function () {
            done = true
            display(button, "inline-block")
            if (point <= 5) {
                  result('piraku cuma ' + point + '!?')
            } else {
                  result('edan euy ' + point + ' kali mukul, parah!')
            }
      }, 20000)

      // santuy
      reset()
      display(button, "none")
      show(valid(rand(tanah.length)))
      gambar(rand(pics.length))

}

function display(x, y) {
      x.forEach(element => {
            element.style.display = y
      });
}

function show(i) {
      gambar(i)

      // show
      tanah[i].classList.add('muncul')
      tanah[i].childNodes[1].classList.remove('clicked')
      temp = i

      setTimeout(function () {
            // close
            tanah[i].classList.remove('muncul')

            i = valid(rand(tanah.length))
            if (!done) {
                  show(i)
            }
      }, close(level.set(category)))
}

function valid(i) {
      if (i !== temp) {
            return i
      } else {
            return valid(rand(tanah.length))
      }
}

function rand(w) {
      return Math.floor(Math.random() * w)
}

function close(level) {
      min = level[0]
      max = level[1]
      return Math.round(Math.random() * (max - min) + min)
}

function reset() {
      temp = 0
      done = false
      point = 0
      score.innerText = point
}

function result(m) {
      msg[0].innerText = m
      display(button, "none")
      display(tanah, "none")
      display(rezz, "flex")

      container.style.alignContent = "stretch"
}

function again() {
      close_settings()

      setTimeout(mulai, 500)
}


// PUKUL

teman.forEach(element => {
      element.addEventListener('click', dipukul)
})

function dipukul() {
      this.parentNode.classList.remove('muncul')

      // point
      point++
      score.innerText = point
}

// setting
function settings() {
      display(button, "none")
      display(tanah, "none")
      display(setting, "flex")

      container.style.alignContent = "stretch"
}

function close_settings() {
      display(button, "inline-block")
      display(tanah, "block")
      display(setting, "none")
      display(rezz, "none")
      getLevel(radio)

      container.style.alignContent = "flex-end"
}

function getLevel(radio) {
      radio.forEach(element => {
            if (element.checked) {
                  category = element.value
            }
      });
}

// random image
const pics = ['dwik', 'rapi', 'rizki', 'habib', 'jasmine', 'aggymahen', 'mahenalien', 'nida', 'pakirfan', 'tasya', 'tiara', 'wahyu']

function gambar(x) {
      t = pics[angkay(pics)]
      u = teman[x]
      u.style.backgroundImage = "url(../img/" + t + ".png)"
}

function angkay(array = []) {
      r = rand(array.length)
      if (r == tempg) {
            angkay(array)
      }
      tempg = r
      return r
}

// preload img

pics.forEach(el => {
      preloadImage(el)
});

function preloadImage(oha) {
      var img = new Image();
      img.src = "/img/" + oha + ".png";
}