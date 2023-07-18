"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

console.log(btnsOpenModal);

const openModal = () => {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

// or u can use
// btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  console.log("A key was pressed");
  e.key === "Escape" && !modal.classList.contains("hidden")
    ? closeModal()
    : null;
});
