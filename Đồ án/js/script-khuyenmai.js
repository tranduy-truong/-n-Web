// Chọn tất cả các nút tab và lắng nghe sự kiện click
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    // Xóa class 'active' khỏi tất cả các nút tab và nội dung
    document
      .querySelectorAll(".tab-button")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((item) => item.classList.remove("active"));

    // Thêm class 'active' cho nút tab và nội dung tương ứng
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});
