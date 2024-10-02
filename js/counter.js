const buttonsPlus = document.querySelectorAll(".counter__inc");
const buttonsMinus = document.querySelectorAll(".counter__dec"); 
const counts = document.querySelectorAll(".counter__value");

buttonsPlus.forEach((button, index) => {
  button.addEventListener("click", () => {
    counts[index].value = parseInt(counts[index].value) + 1;
  });
});

buttonsMinus.forEach((button, index) => {
  button.addEventListener("click", () => {
    let count = parseInt(counts[index].value);
    if (count > 0) {
      counts[index].value = count - 1;
    }
  });
});
