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

function initSplide() {
    const splideContainer = document.querySelector('#splide-slider');

    if (window.innerWidth <= 768) {
        document.querySelector(".splide__items").style.visibility =  "unset";
        window.splide = new Splide(splideContainer, {
            perPage: 3,
            // pagination: true,
        }).mount();
    }
}
initSplide()

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
  



