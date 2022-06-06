let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");
let control = document.querySelectorAll(".control");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

control.onclick = () => {
  document.querySelector(".activechild").classList.remove("activechild");
  document.getElementById(button.dataset.id).classList.add("activechild");
  header.classList.remove("active");
};
