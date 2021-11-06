const openModal = document.querySelector(".btn");
const closeModal = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-cover");

openModal.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});