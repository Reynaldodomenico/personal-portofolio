let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");
let buttoncontact = document.querySelector(".btn-contact");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".activechild").classList.remove("activechild");
      document.getElementById(button.dataset.id).classList.add("activechild");
      menu.classList.toggle("fa-times");
      header.classList.remove("active");
    });
  });
})();
