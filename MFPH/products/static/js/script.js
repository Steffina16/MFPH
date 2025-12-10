document.addEventListener("DOMContentLoaded", function () {

    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    function updateSlider(index) {
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));

        currentSlide = index;
        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    function nextSlide() {
        updateSlider((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        updateSlider((currentSlide - 1 + slides.length) % slides.length);
    }

    document.querySelector(".slider-arrow.right").addEventListener("click", nextSlide);
    document.querySelector(".slider-arrow.left").addEventListener("click", prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => updateSlider(index));
    });

    // autoslide
    setInterval(nextSlide, 4000);
});
