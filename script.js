const slides = document.querySelectorAll(".slide");

slides.forEach((slide,index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
});

function startSlider(){
    currentIndex = (currentIndex + 1)% slides.length;

    slides.forEach((slide,index) => {
        const offset = (index - currentIndex)*100;
        slide.style.transform = `translateX(${offset}%)`
    },2000) //2secs
}