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
  const splideContainer = document.querySelector("#splide-slider");

  if (window.innerWidth <= 768) {
    document.querySelector(".splide__items").style.visibility = "unset";
    window.splide = new Splide(splideContainer, {
      perPage: 3,
    }).mount();
  }
}
initSplide();

function handleSeeAllButtons() {
  const seeAllButtons = document.querySelectorAll(
    ".product-section__see-all-btn"
  );

  seeAllButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const wrapper = document.querySelectorAll(".product-section__wrapper")[
        index
      ];
      if (!wrapper) {
        console.error("Wrapper topilmadi!");
        return;
      }
      const hiddenCards = wrapper.querySelectorAll(
        ".product-section__card.hidden"
      );
      hiddenCards.forEach((card) => {
        card.classList.remove("hidden");
        card.classList.add("visible");
      });

      this.style.display = "none";
    });
  });
}

function initializeMuragaySeeAllButtons() {
  const seeAllMuragayButtons = document.querySelectorAll(
    ".muragay-product__see-all"
  );

  seeAllMuragayButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const wrapper = button
        .closest(".muragay-product")
        .querySelector(".muragay-product__wrapper");

      if (!wrapper) {
        console.error("Wrapper element topilmadi, iltimos kodni tekshiring!");
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

function checkScreenWidth() {
  if (window.matchMedia("(max-width: 675px)").matches) {
    handleSeeAllButtons();
    initializeMuragaySeeAllButtons();
  }
}
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);

