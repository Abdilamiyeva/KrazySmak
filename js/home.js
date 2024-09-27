document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    // type: "loop",
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

  const prevButton = splide.Components.Arrow.prev;
  const nextButton = splide.Components.Arrow.next;

  function updateButtons() {
    const index = splide.index;

    if (index === 0) {
      prevButton.classList.add("is-disabled");
    } else {
      prevButton.classList.remove("is-disabled");
    }

    if (index === splide.length - 1) {
      nextButton.classList.add("is-disabled"); 
    } else {
      nextButton.classList.remove("is-disabled"); 
    }
  }

  updateButtons();

  splide.on("move", updateButtons);
});
