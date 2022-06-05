let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");
let buttoncontact = document.querySelector(".btn-contact");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

// buttoncontact.onclick = () => {
//   classList.remove("activechild");
//   document.getElementById(dataset.id).classList.add("activechild");
// };

(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".activechild").classList.remove("activechild");
      document.getElementById(button.dataset.id).classList.add("activechild");
    });
  });
})();
