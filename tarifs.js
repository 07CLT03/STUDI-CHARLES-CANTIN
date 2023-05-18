const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const leftSlide = document.querySelector(".left-slide");
const upButton = document.querySelector(".up");
const downButton = document.querySelector(".down");

const slidesLenght = leftSlide.querySelectorAll('div').length;

let startIndex = 0;
// match the div on the left with the picture on the right 
leftSlide.style.top = `-${(slidesLenght - 1) * 70}vh` ;


upButton.addEventListener('click', ()=> changeSlide('up')); 
downButton.addEventListener('click', ()=> changeSlide('down')); 

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === 'up') {
    startIndex++;
    if(startIndex > slidesLenght -1) {
      startIndex = 0;
    }
  } else if (direction === 'down') {
    startIndex--;
    if(startIndex < 0) {
      startIndex = slidesLenght -1;
    }
  }

  slideRight.style.transform = `translateY(-${startIndex * sliderHeight}px)`; 
  leftSlide.style.transform = `translateY(${startIndex * sliderHeight}px)`; 

};




// ANIMATION GSAP - SLIDING & FADING 

gsap.registerPlugin(ScrollTrigger); 

gsap.from(".main-title",{
  opacity:0,  
  duration:4, 
  delay: 1,
  scale:0.5,
  scrollTrigger: ".slider-container"
})

gsap.from(".slider-container",{
  opacity:0,  
  duration:4, 
  delay: 3,
  scale:0.5,
  scrollTrigger: ".slider-container"
})





// ANIMATION FOOTER   - SLIDE DOWN TO UP 

gsap.registerPlugin(ScrollTrigger); 

gsap.from(".footer-card-left",{
  y:100,
  opacity:0,  
  duration:3, 
  scale:0.5,
  scrollTrigger: ".copyright"
})

gsap.from(".footer-card-center",{
  y:100,
  opacity:0,  
  duration:3, 
  scale:0.5,
  delay:1,
  scrollTrigger: ".copyright"
})

gsap.from(".footer-card-right",{
  y:100,
  opacity:0,  
  duration:2, 
  scale:0.5,
  delay:2.2,
  scrollTrigger: ".animation-trigger-slide-in"
})