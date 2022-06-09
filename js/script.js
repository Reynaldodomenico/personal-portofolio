let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");
let control = document.querySelectorAll(".control");
let redirect = document.querySelector("#redirect");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

// foreach.control.onclick = () => {
//   document.querySelector(".activechild").classList.remove("activechild");
//   document.getElementById(button.dataset.id).classList.add("activechild");
//   header.classList.remove("active");
// };
redirect.onclick = () => {
  document.querySelector(".activechild").classList.remove("activechild");
  document.getElementById(button.dataset.id).classList.add("activechild");
};

(function () {
  control.forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".activechild").classList.remove("activechild");
      document.getElementById(button.dataset.id).classList.add("activechild");
      header.classList.remove("active");
      menu.classList.remove("fa-times");
    });
  });
})();
