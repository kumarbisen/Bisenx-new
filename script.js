document.addEventListener('DOMContentLoaded', function() {
  const wrap = document.querySelector('.slides-wrap');
  const slides = document.querySelectorAll('.slide');
  
  let current = 0;

  // Function to update the visible slide
  function updateCarousel() {
    wrap.style.transform = `translateX(-${current * 100}%)`;
  }

  // Auto-scroll every 3 seconds
  let autoScroll = setInterval(() => {
  current = (current + 1) % slides.length;
  updateCarousel();
  }, 3000);

})