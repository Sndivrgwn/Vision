const carouselItems = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(".carousel-indicators button");

let currentSlide = 0;

function updateSlide(slideBaru) {
  carouselItems[currentSlide].classList.remove("active");
  indicators[currentSlide].classList.remove("active");

  currentSlide = slideBaru;

  carouselItems[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    updateSlide(index);
  });
});

document
  .querySelector(".carousel-control-prev")
  .addEventListener("click", () => {
    let slideBaru =
      currentSlide === 0 ? carouselItems.length - 1 : currentSlide - 1;
    updateSlide(slideBaru);
  });

document
  .querySelector(".carousel-control-next")
  .addEventListener("click", () => {
    let slideBaru =
      currentSlide === carouselItems.length - 1 ? 0 : currentSlide + 1;
    updateSlide(slideBaru);
  });
