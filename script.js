const slides = document.querySelectorAll(".slide");
const slider = document.querySelectorAll(".slider");
const nextNav = document.querySelector('.next')
const prevNav = document.querySelector('.prev')


slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

let currentIndex = 0;
let intervalId;

// stop and slider when pointer is over the slides
// slider.addEventListener("mouseenter", stopSlider);

//start the slider when pointer leaves the slides
// slider.addEventListener("mouseleave", startSlider);

// handle next nav click event
nextNav.addEventListener("click",() => {
    showNextSlide();
    stopSlider();
})
// handle previous nav click event
prevNav.addEventListener("click",() => {
    showPrevSlide();
    stopSlider();
})

function startSlider() {
  intervalId = setInterval(() => {
    
  }, 2000); //2secs
}

function stopSlider() {
  clearInterval(intervalId);
}

function showNextSlide(){
    currentIndex = (currentIndex + 1) % slides.length;

    slides.forEach((slide, index) => {
      const offset = (index - currentIndex) * 100;
      slide.style.transform = `translateX(${offset}%)`;
    });
}

function showPrevSlide(){
    currentIndex = (currentIndex - 1 + slides.length ) % slides.length;

    slides.forEach((slide, index) => {
      const offset = (index - currentIndex) * 100;
      slide.style.transform = `translateX(${offset}%)`;
    });
}

function updateSlides(){
    slides.forEach((slide, index) => {
        const offset = (index - currentIndex) * 100;
        slide.style.transform = `translateX(${offset}%)`;
      });
}