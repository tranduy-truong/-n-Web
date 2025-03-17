// Chức năng chuyển đổi tab
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  // Đồng bộ trạng thái ban đầu
  const activeTab = document.querySelector(".tab-button.active");
  const activeTabId = activeTab.getAttribute("data-tab");
  tabContents.forEach((content) => content.classList.remove("active"));
  document.getElementById(activeTabId).classList.add("active");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Xóa lớp active khỏi tất cả các nút và nội dung
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Thêm lớp active cho nút được nhấn và nội dung tương ứng
      this.classList.add("active");
      const tabId = this.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Chức năng hiển thị/ẩn danh sách món ăn
  const viewMenuButtons = document.querySelectorAll(".view-menu-btn");
  viewMenuButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const menuList = this.parentElement.nextElementSibling; // Lấy div.menu-list ngay sau nút
      const isVisible = menuList.style.display === "block";

      // Ẩn tất cả danh sách món ăn trước khi hiển thị danh sách mới
      document.querySelectorAll(".menu-list").forEach((list) => {
        list.style.display = "none";
      });

      // Hiển thị/ẩn danh sách món ăn của nhà hàng được bấm
      menuList.style.display = isVisible ? "none" : "block";
    });
  });
});
