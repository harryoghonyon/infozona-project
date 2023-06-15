document.addEventListener("DOMContentLoaded", () => {
  const hamburgerWrap = document.querySelector(".hamburger-wrap");
  const burgerDropdownWrap = document.querySelector(".burger-dropdown-wrap");
  const bodyElement = document.querySelector("body");

  hamburgerWrap.addEventListener("click", function () {
    this.classList.toggle("active");
    burgerDropdownWrap.classList.toggle("show");
    bodyElement.classList.toggle("overflow-hidden");
  });

  document.addEventListener("click", function (event) {
    const targetElement = event.target;
    if (
      !hamburgerWrap.contains(targetElement) &&
      !burgerDropdownWrap.contains(targetElement)
    ) {
      hamburgerWrap.classList.remove("active");
      burgerDropdownWrap.classList.remove("show");
      bodyElement.classList.remove("overflow-hidden");
    }
  });
});
