document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    perPage: 3,
    perMove: 1,
    breakpoints: {
        1300: {
          perPage: 2,
        },
        800: {
          perPage: 1,
        },
      },
  }).mount();
});


// Function to initialize Splide for mobile
function initSplide() {
    const splideContainer = document.querySelector('#splide-slider');

    if (window.innerWidth <= 768) {
        window.splide = new Splide(splideContainer, {
            perPage: 1,
            pagination: true,
        }).mount();
    }
}

// Initialize Splide on page load and handle resize events
window.addEventListener('load', initSplide);

window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && window.splide) {
        window.splide.destroy(true); // Properly destroy Splide instance
        // window.splide = null;
    } else if (window.innerWidth <= 768 && !window.splide) {
        initSplide();
    }
});

// ========================================
function handleSeeAllButtons() {
    const seeAllButtons = document.querySelectorAll('.product-section__see-all-btn');
  
    seeAllButtons.forEach((button, index) => {
      button.addEventListener('click', function () {
        const wrapper = document.querySelectorAll('.product-section__wrapper')[index];
  
        if (!wrapper) {
          console.error('Wrapper topilmadi!');
          return;
        }
        const hiddenCards = wrapper.querySelectorAll('.product-section__card.hidden');
        hiddenCards.forEach(card => {
          card.classList.remove('hidden');
          card.classList.add('visible');
        });
  
        this.style.display = 'none';
      });
    });
  }
  
  function checkScreenWidth() {
    if (window.matchMedia('(max-width: 650px)').matches) {
      handleSeeAllButtons();
    }
  }
  checkScreenWidth();
  
  window.addEventListener('resize', checkScreenWidth);
  



