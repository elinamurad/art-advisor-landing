const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

function getItemsPerView() {
  return window.innerWidth < 768 ? 1 : 3;
}

function updateCarousel() {
  const itemWidth = document.querySelector('.carousel-item').offsetWidth;
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  const itemsPerView = getItemsPerView();
  const totalItems = document.querySelectorAll('.carousel-item').length;

  if (currentIndex === 0) {
    currentIndex = totalItems - itemsPerView; // jump to last full view
  } else {
    currentIndex -= 1;
  }
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  const itemsPerView = getItemsPerView();
  const totalItems = document.querySelectorAll('.carousel-item').length;
  const maxIndex = totalItems - itemsPerView;

  if (currentIndex >= maxIndex) {
    currentIndex = 0; // restart at beginning
  } else {
    currentIndex += 1;
  }
  updateCarousel();
});

window.addEventListener('resize', () => {
  updateCarousel();
});

updateCarousel();
