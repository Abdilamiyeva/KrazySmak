document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    perPage: 3,
    perMove: 1,
    type: 'loop',
    gap:'20px',
    breakpoints: {
      1300: {
        perPage: 2,
        gap:'20px',
      },
      768: {
        perPage: 1,
      },
    },
  }).mount();
});
// ============================================================================
let splide;

function initSplide() {
  const splideContainer = document.querySelector("#splide-slider");

  if (!splideContainer) {
    return;
  }

  if (splide) {
    splide.destroy();
  }

  let perPage = 6;

  if(window.innerWidth >= 1024){
    splide.destroy()

  }
  else if (window.innerWidth <= 768) {
    perPage = 3;
  } else if (window.innerWidth <= 1024) {
    perPage = 6;
  }

  splide = new Splide(splideContainer, {
    perPage: perPage,
    gap: '16px',
    type: 'loop',

  }).mount();

  document.querySelector(".splide__items").style.visibility = "unset";
}

window.addEventListener("resize", initSplide);
document.addEventListener("DOMContentLoaded", initSplide);

// ==============================================================================
function initializeMuragaySeeAllButtons() {
  const seeAllMuragayButtons = document.querySelectorAll(
    ".muragay-product__see-all"
  );

  seeAllMuragayButtons.forEach((button) => {
    button.addEventListener("click", function() {
      const wrapper = button
        .closest(".muragay-product")
        .querySelector(".muragay-product__wrapper");

      if (!wrapper) {
        console.error("Wrapper not found!");
        return;
      }
      const hiddenElements = wrapper.querySelectorAll(
        ".muragay-product__information.hidden"
      );
      hiddenElements.forEach((element) => {
        element.classList.remove("hidden");
      });
      button.style.display = "none";
    });
  });
}

function handleSeeAllButtons() {
  const seeAllButtons = document.querySelectorAll(
    ".product-section__see-all-btn"
  );
  const seeAllFoodButtons = document.querySelectorAll(".food__see-all-btn");

  seeAllButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const wrapper = document.querySelectorAll(".product-section__wrapper")[index];

      if (!wrapper) {
        console.error("Wrapper element not found!");
        return;
      }

      const hiddenCards = wrapper.querySelectorAll(".product-section__card.hidden");
      const thirdCard = wrapper.querySelectorAll(".product-section__card.visible")[2];
      thirdCard.classList.add("third");
      hiddenCards.forEach((card) => {
        card.classList.remove("hidden");
        card.classList.add("visible");
      });
      thirdCard.classList.remove("third");

      
      this.style.display = "none";
    });
  });

  seeAllFoodButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const productsWrapper = document.querySelectorAll(".food__products")[index];

      if (!productsWrapper) {
        console.error("Products wrapper element not found!");
        return;
      }

      const hiddenCards = productsWrapper.querySelectorAll(".food__products__card.hidden");
      const thirdFoodCard = productsWrapper.querySelectorAll(".food__products__card.visible")[2];

      thirdFoodCard.classList.add("third");
      hiddenCards.forEach((card) => {
        card.classList.remove("hidden");
        card.classList.add("visible");
      });
      thirdFoodCard.classList.remove("third");

      this.style.display = "none";
    });
  });

}

function checkScreenWidth() {
  if (window.matchMedia("(max-width: 675px)").matches) {
    handleSeeAllButtons();
    initializeMuragaySeeAllButtons();
  }
}
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);

// ===============================================================================
