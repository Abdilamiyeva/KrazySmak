function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
    document.body.classList.add('modal-open');
  } else {
    console.error(`Modal with id "${modalId}" not found.`);
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
  } else {
    console.error(`Modal with id "${modalId}" not found.`);
  }
}

document.querySelectorAll('.modal .close-btn').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    const modal = closeBtn.closest('.modal');
    if (modal) {
      modal.classList.remove('show');
      document.body.classList.remove('modal-open');
    }
  });
});

document.querySelectorAll('#pizza-btn').forEach(button => {
  button.addEventListener('click', () => {
    openModal('pizza-modal');
  });
});

document.querySelectorAll('#add-ingredients-btn').forEach(button => {
  button.addEventListener('click', () => {
    openModal('ingredients-modal');
  });
});

document.querySelectorAll('#crab__modal-btn').forEach(button => {
  button.addEventListener('click', () => {
    openModal('crab-modal');
  });
});

document.querySelectorAll('#rolls-btn').forEach(button => {
  button.addEventListener('click', () => {
    openModal('rolls-modal');
  });
});

document.querySelectorAll('#fried-rolls-btn').forEach(button => {
  button.addEventListener('click', () => {
    openModal('fried-rolls-modal');
  });
});
document.querySelectorAll('#sweet-rolls').forEach(button => {
  button.addEventListener('click', () => {
    openModal('sweet-rolls__modal');
  });
});
document.querySelectorAll('#sweet-rolls__add').forEach(button => {
  button.addEventListener('click', () => {
    openModal('choose-fruit');
  });
});
document.querySelectorAll('#crazyto-btn').forEach(button => {
  button.addEventListener('click', () => {
    openModal('crazyto__modal');
  });
});

document.querySelectorAll('#crazyto__add-btn').forEach(button => {
  button.addEventListener('click', () => {
    openModal('choose-ingredients');
  });
});

document.querySelectorAll(".pizza__add-btn-content button").forEach(button => {
  button.addEventListener("click", function() {
    this.style.display = "none"
  })
});

document.addEventListener('DOMContentLoaded', function() {
  const basketBtn = document.getElementById('basketBtn');
  const addBtnContent = document.getElementById('addBtnContent');
  const warningText = document.getElementById('warningText');

  basketBtn.addEventListener('click', function() {
      if (!basketBtn.disabled) {
          addBtnContent.style.display = 'flex';
          warningText.style.display = 'none';
          addBtnContent.style.color ="red"
          document.querySelectorAll('.pizza__ingredient').forEach(button => {
              button.addEventListener('click', function() {
                  basketBtn.disabled = false;
              });
          });
      }
  });
});
// ========================================================


// =====================================================
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

// =========================================

document.addEventListener('DOMContentLoaded', function() {
  const customSelects = document.querySelectorAll('.single-product__select');
  
  customSelects.forEach(customSelect => {
    const optionsContainer = customSelect.nextElementSibling;
    const options = optionsContainer.querySelectorAll('.option');
    const selectedOption = customSelect.querySelector('.selected-option');

    customSelect.addEventListener('click', function() {
      const isOpen = optionsContainer.style.display === 'block';
      optionsContainer.style.display = isOpen ? 'none' : 'block';
      customSelect.classList.toggle('open', !isOpen);
    });

    options.forEach(option => {
      option.addEventListener('click', function() {
        selectedOption.textContent = this.textContent;
        optionsContainer.style.display = 'none';
        customSelect.classList.remove('open');
      });
    });

    document.addEventListener('click', function(event) {
      if (!customSelect.contains(event.target)) {
        optionsContainer.style.display = 'none';
        customSelect.classList.remove('open');
      }
    });
  });
});



