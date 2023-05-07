
const myTExt = new SplitType('.opening-landing')

gsap.to('.flip-text')







window.addEventListener('load', () => {

  const TL = gsap.timeline({paused:true});

  TL
  .staggerFrom(loadingTitle1,1, {top: -50, opacity: 0, ease:"power2.out"}, 0.4)
  .staggerFrom(loadingTitle2,1, {top: -50, opacity: 0, ease:"power2.out"}, 0.5)
  .staggerFrom(navigationHeader, 1, {left:-200, ease:"power2.out"}, 0.3, '-=1')
  .from(navHeader1, 2, {right:-200, opacity: 0, ease:"power2.out"}, 0.4, '-=1')
  .from(navHeader2, 2, {right:-200, opacity: 0, ease:"power2.out"}, 0.5, '-=1')
  .from(navHeader3, 2, {right:-200, opacity: 0, ease:"power2.out"}, 0.6)
  .from(navHeader4, 2, {right:-200, opacity: 0, ease:"power2.out"}, 0.7,);

  TL.play(); 
})






// ANIMATION GALLERIE   - SLIDE DOWN TO UP 

gsap.timeline({
  scrollTrigger: {
      trigger: ".gallerie-section",
      start:"top center",
      //end: "bottom top",
      pin:true,
  }
})
.from(".cover-img1", {y:100, opacity:0, scale:0.5, duration:2.5})
.from(".cover-img2", {y:100, opacity:0, scale:0.5, duration:2.5},'-=1.5')
.from(".cover-img3", {y:100, opacity:0, scale:0.5, duration:2.5},'-=1.2')
.from(".cover-img4", {y:100, opacity:0, scale:0.5, duration:2.5},'-=1.2')
.from(".cover-img5", {y:100, opacity:0, scale:0.5, duration:2.5},'-=1.2')
.from(".cover-img6", {y:100, opacity:0, scale:0.5, duration:2.5},'-=1.2');




// ANIMATION ABOUT ME  



// reveal images when mouse over 
setTimeout(function(){
  $(".photographe").mouseover(function () { 
    gsap.to(".groupe-img img", {
      x: 100,
      margin: '0 10px 0',
      duration: 1.8,
      opacity: 1,
      rotate: 0, 
      stagger: .15
    }); 
  });
  $(".photographe").mouseout(function () { 
    gsap.to(".groupe-img img", {
      x: 1100,
      margin: '0 -140px 0',
      duration: 2,
      opacity: 1,
      rotate: 20, 
      stagger: .15
    }); 
  });   
});









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
  duration:3, 
  scale:0.5,
  delay:2,
  scrollTrigger: ".animation-trigger-slide-in"
})