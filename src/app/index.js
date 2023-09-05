const burgerCheckbox = document.querySelector(".burger__check");

burgerCheckbox.addEventListener("change", () => {
  if (burgerCheckbox.checked) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
