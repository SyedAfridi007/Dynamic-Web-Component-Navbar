let menuBtn = document.querySelector(".menu-btn");
let listEl = document.querySelectorAll(".list");
menuBtn.addEventListener("click", function () {
  for (let i = 0; i < listEl.length; i++) {
    listEl[i].classList.toggle("show");
    listEl[i].style.transitionDelay = "0." + i + "s";
  }
});