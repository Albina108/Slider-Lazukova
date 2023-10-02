const images =[
  {
    image: './images/image_1.png',
    city: 'Rostov-on-Don LCD admiral',
    repair: '3.5 months',
    apartment: '81m<sup>2</sup>',

  },

  {
    image: './images/image_2.png',
    city: 'Sochi Thieves',
    repair:'4 months',
    apartment: '105m<sup>2</sup>',
  },
  {
    image: './images/image_3.png',
    city: 'Rostov-on-Don Patriotic',
    repair: '3 months',
    apartment: '93m<sup>2</sup>',
  }

];

let slideIndex = 0;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');



const listLinks = document.querySelectorAll('.links'); //сохраняем в переменные
const dots = document.querySelectorAll('.dot');




listLinks.forEach((link, index) => {
  link.addEventListener('click', function() {

    console.log(link, index)

    slideIndex = index
    initSlider()
    changeActiveClass()
  })
})

dots.forEach((dot, index) => {
  dot.addEventListener('click', function(){

    console.log(dot, index)

    slideIndex = index
    initSlider()
    changeActiveClass()
  })
})

// initSlider(slideIndex);

function initSlider() {
  console.log(images[slideIndex].image)
  document.querySelector('.slider-image').src = images[slideIndex].image
  //document.querySelector('#apart').textContent = images[slideIndex].apartment
  document.querySelector('#city').innerHTML = images[slideIndex].city
  document.querySelector('#apart').innerHTML = images[slideIndex].apartment
  document.querySelector('#repair').innerHTML = images[slideIndex].repair
 
 
}

function changeActiveClass() {
  document.querySelector('.dot.active').classList.remove('active')
  dots[slideIndex].classList.add('active')
}

// стрелочки


prev.addEventListener('click', function() {
  initSlider(slideIndex - 1);
  currentIndex -= 1;
})
next.addEventListener('click', function() {
  initSlider(slideIndex + 1);
  currentIndex += 1;
})




