let slideIndex = 0;

const slides = document.getElementsByClassName("carousel-slide");
const prev = document.getElementsByClassName("carousel-prev")[0];
const next = document.getElementsByClassName("carousel-next")[0];

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Changes image every 4 seconds
}

prev.onclick = function () {
    slideIndex -= 2;
    if (slideIndex < 1) { slideIndex = slides.length - 1; }
    showSlides();
}

next.onclick = function () {
    if (slideIndex > slides.length - 1) { slideIndex = 0; }
    showSlides();
}

showSlides();
