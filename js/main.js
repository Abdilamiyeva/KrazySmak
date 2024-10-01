function selectedDeliveryCity(dropdownBtnId, dropdownClass) {
  const dropdownMenuBtn = document.getElementById(dropdownBtnId);
  const dropdownMenu = dropdownMenuBtn.closest(dropdownClass);

  dropdownMenuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle("open");
  });

  dropdownMenu
    .querySelectorAll(".delivery__dropdown-item")
    .forEach(function (item) {
      item.addEventListener("click", function () {
        dropdownMenuBtn.querySelector("span").textContent = this.textContent;
        dropdownMenu.classList.remove("open");
      });
    });

  document.addEventListener("click", function (e) {
    if (
      !dropdownMenu.contains(e.target) &&
      !dropdownMenuBtn.contains(e.target)
    ) {
      dropdownMenu.classList.remove("open");
    }
  });
}

selectedDeliveryCity(
  "delivery__dropdown-menubtn-1",
  ".header__delivery__dropdown"
);
selectedDeliveryCity(
  "delivery__dropdown-menubtn-2",
  ".header__delivery__dropdown"
);

function setupLinksDropdownMenu() {
  document.querySelector(".header__menu__button").addEventListener("click", function () {
    const menu = document.querySelector(".header__dropdown__items");
    const icon = document.querySelector(".header__menu__button svg");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
    if (menu.style.display === "block") {
      icon.style.transform = "rotate(-90deg)";
  } else {
      icon.style.transform = "rotate(0deg)"; 
  }
  });
  document.querySelector("#menu__third-btn").addEventListener("click", function() {
     const arrowIcon = document.querySelector("#menu__third-btn svg");
     arrowIcon.classList.toggle("transform");
  })
  document.addEventListener("click", function (event) {
    const menu = document.querySelector(".header__dropdown__items");
    const button = document.querySelector(".header__menu__button");
    if (!menu.contains(event.target) && !button.contains(event.target)) {
      menu.style.display = "none";
    }
  });
}
setupLinksDropdownMenu();


document.addEventListener("DOMContentLoaded", function () {

  initializeToggle(
    ".footer__actions .footer__item-title",
    ".footer__actions .footer__items"
  );
  initializeToggle(
    ".footer__actions-second .footer__item-title",
    ".footer__actions-second .footer__right-items"
  );
});

function initializeToggle(titleSelector, listSelector) {
  const titleElement = document.querySelector(titleSelector);
  const listElement = document.querySelector(listSelector);
  const iconElement = titleElement.querySelector(".footer__item-title__icon"); 

  if (titleElement && listElement  && iconElement) {
    titleElement.addEventListener("click", function () {
      listElement.classList.toggle("active");
      iconElement.classList.toggle("rotate");
    });
  }
}


