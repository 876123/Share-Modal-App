const modal = document.querySelector(".Modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  Modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  Modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};