// слайдер 1
let viewport = document.getElementById('viewport').offsetWidth
let btnNext = document.getElementById('next')
let btnPrev = document.getElementById('prev')
let slider = document.querySelector('div.slider')
let viewSliders = document.querySelectorAll('.viewSlide')
let viewSlide = 0

btnNext.addEventListener('click', function () {
  if (viewSlide < 4) {
    viewSlide++
  } else {
    viewSlide = 0
  }
  slider.style.left = -viewSlide * viewport + 'px'
})

btnPrev.addEventListener('click', function () {
  if (viewSlide > 0) {
    viewSlide--
  } else {
    viewSlide = 4
  }
  slider.style.left = -viewSlide * viewport + 'px'
})

// слайдер 2
let viewport2 = document.getElementById('viewport2').offsetWidth
let btnNext2 = document.getElementById('next2')
let btnPrev2 = document.getElementById('prev2')
let slider2 = document.querySelector('div.slider2')
let viewSliders2 = document.querySelectorAll('.viewSlide2')
let viewSlide2 = 0

btnNext2.addEventListener('click', function () {
  if (viewSlide2 < 4) {
    viewSlide2++
  } else {
    viewSlide2 = 0
  }
  slider2.style.left = -viewSlide2 * viewport2 + 'px'
})

btnPrev2.addEventListener('click', function () {
  if (viewSlide2 > 0) {
    viewSlide2--
  } else {
    viewSlide2 = 4
  }
  slider2.style.left = -viewSlide2 * viewport2 + 'px'
})

// слайдер 3
let viewport3 = document.getElementById('viewport3').offsetWidth
let btnNext3 = document.getElementById('next3')
let btnPrev3 = document.getElementById('prev3')
let slider3 = document.querySelector('div.slider3')
let viewSliders3 = document.querySelectorAll('.viewSlide3')
let viewSlide3 = 0

btnNext3.addEventListener('click', function () {
  if (viewSlide3 < 4) {
    viewSlide3++
  } else {
    viewSlide3 = 0
  }

  slider3.style.left = -viewSlide3 * viewport3 + 'px'
})

btnPrev3.addEventListener('click', function () {
  if (viewSlide3 > 0) {
    viewSlide3--
  } else {
    viewSlide3 = 4
  }

  slider3.style.left = -viewSlide3 * viewport3 + 'px'
})

// слайдер 4
let viewport4 = document.getElementById('viewport4').offsetWidth
let btnNext4 = document.getElementById('next4')
let btnPrev4 = document.getElementById('prev4')
let slider4 = document.querySelector('div.slider4')
let viewSliders4 = document.querySelectorAll('.viewSlide4')
let viewSlide4 = 0

btnNext4.addEventListener('click', function () {
  if (viewSlide4 < 1) {
    viewSlide4++
  } else {
    viewSlide4 = 0
  }

  slider4.style.left = -viewSlide4 * viewport4 + 'px'
})

btnPrev4.addEventListener('click', function () {
  if (viewSlide4 > 0) {
    viewSlide4--
  } else {
    viewSlide4 = 1
  }

  slider4.style.left = -viewSlide4 * viewport4 + 'px'
})

// слайдер 5
let viewport5 = document.getElementById('viewport5').offsetWidth
let btnNext5 = document.getElementById('next5')
let btnPrev5 = document.getElementById('prev5')
let slider5 = document.querySelector('div.slider5')
let viewSliders5 = document.querySelectorAll('.viewSlide5')
let viewSlide5 = 0

btnNext5.addEventListener('click', function () {
  if (viewSlide5 < 1) {
    viewSlide5++
  } else {
    viewSlide5 = 0
  }

  slider5.style.left = -viewSlide5 * viewport5 + 'px'
})

btnPrev5.addEventListener('click', function () {
  if (viewSlide5 > 0) {
    viewSlide5--
  } else {
    viewSlide5 = 1
  }

  slider5.style.left = -viewSlide5 * viewport5 + 'px'
})

// слайдер 6
let viewport6 = document.getElementById('viewport6').offsetWidth
let btnNext6 = document.getElementById('next6')
let btnPrev6 = document.getElementById('prev6')
let slider6 = document.querySelector('div.slider6')
let viewSliders6 = document.querySelectorAll('.viewSlide6')
let viewSlide6 = 0

btnNext6.addEventListener('click', function () {
  if (viewSlide6 < 1) {
    viewSlide6++
  } else {
    viewSlide6 = 0
  }

  slider6.style.left = -viewSlide6 * viewport6 + 'px'
})

btnPrev6.addEventListener('click', function () {
  if (viewSlide6 > 0) {
    viewSlide6--
  } else {
    viewSlide6 = 1
  }

  slider6.style.left = -viewSlide6 * viewport6 + 'px'
})

// слайдер 7
let viewport7 = document.getElementById('viewport7').offsetWidth
let btnNext7 = document.getElementById('next7')
let btnPrev7 = document.getElementById('prev7')
let slider7 = document.querySelector('div.slider7')
let viewSliders7 = document.querySelectorAll('.viewSlide7')
let viewSlide7 = 0

btnNext7.addEventListener('click', function () {
  if (viewSlide7 < 1) {
    viewSlide7++
  } else {
    viewSlide7 = 0
  }

  slider7.style.left = -viewSlide7 * viewport7 + 'px'
})

btnPrev7.addEventListener('click', function () {
  if (viewSlide7 > 0) {
    viewSlide7--
  } else {
    viewSlide7 = 1
  }

  slider7.style.left = -viewSlide7 * viewport7 + 'px'
})


// слайдер 8
let viewport8 = document.getElementById('viewport8').offsetWidth
let btnNext8 = document.getElementById('next8')
let btnPrev8 = document.getElementById('prev8')
let slider8 = document.querySelector('div.slider8')
let viewSliders8 = document.querySelectorAll('.viewSlide8')
let viewSlide8 = 0

btnNext8.addEventListener('click', function () {
  if (viewSlide8 < 3) {
    viewSlide8++
  } else {
    viewSlide8 = 0
  }
  slider8.style.left = -viewSlide8 * viewport8 + 'px'
})

btnPrev8.addEventListener('click', function () {
  if (viewSlide8 > 0) {
    viewSlide8--
  } else {
    viewSlide8 = 3
  }
  slider8.style.left = -viewSlide8 * viewport8 + 'px'
})

// слайдер 9
let viewport9 = document.getElementById('viewport9').offsetWidth
let btnNext9 = document.getElementById('next9')
let btnPrev9 = document.getElementById('prev9')
let slider9 = document.querySelector('div.slider9')
let viewSliders9 = document.querySelectorAll('.viewSlide9')
let viewSlide9 = 0

btnNext9.addEventListener('click', function () {
  if (viewSlide9 < 2) {
    viewSlide9++
  } else {
    viewSlide9 = 0
  }
  slider9.style.left = -viewSlide9 * viewport9 + 'px'
})

btnPrev9.addEventListener('click', function () {
  if (viewSlide9 > 0) {
    viewSlide9--
  } else {
    viewSlide9 = 2
  }
  slider9.style.left = -viewSlide9 * viewport9 + 'px'
})

// слайдер 10
let viewport10 = document.getElementById('viewport10').offsetWidth
let btnNext10 = document.getElementById('next10')
let btnPrev10 = document.getElementById('prev10')
let slider10 = document.querySelector('div.slider10')
let viewSliders10 = document.querySelectorAll('.viewSlide10')
let viewSlide10 = 0

btnNext10.addEventListener('click', function () {
  if (viewSlide10 < 3) {
    viewSlide10++
  } else {
    viewSlide10 = 0
  }
  slider10.style.left = -viewSlide10 * viewport10 + 'px'
})

btnPrev10.addEventListener('click', function () {
  if (viewSlide10 > 0) {
    viewSlide10--
  } else {
    viewSlide10 = 3
  }
  slider10.style.left = -viewSlide10 * viewport10 + 'px'
})


