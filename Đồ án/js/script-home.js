// Xử lý tab
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-button")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((item) => item.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

// Xử lý hamburger menu
const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelector(".menu-items");

hamburger.addEventListener("click", () => {
  menuItems.classList.toggle("active");
});
