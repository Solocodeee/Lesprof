window.alert("Beta version under development");

// دالة لتبديل ظهور قائمة الروابط
document.getElementById("menuToggle").addEventListener("click", function () {
  var navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show"); // تبديل كلاس show
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 1000, // يتحرك كل 2 ثانية
    disableOnInteraction: false, // يستمر بعد التفاعل
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const icon = document.getElementById("toggleIcon");
const socialLinks = document.getElementById("socialLinks");

icon.addEventListener("click", () => {
  if (
    socialLinks.style.display === "none" ||
    socialLinks.style.display === ""
  ) {
    socialLinks.style.display = "block";
    icon.innerHTML = "&#10005;"; // Change to "X" symbol
  } else {
    socialLinks.style.display = "none";
    icon.innerHTML = "&#9993;"; // Change back to message icon
  }
});



document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.5
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});







// dark mode
function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  // حفظ الاختيار في الـ localStorage
  if (element.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
  } else {
      localStorage.setItem("theme", "light");
  }
}

// عند تحميل الصفحة، فحص الاختيار المحفوظ في الـ localStorage
window.onload = function() {
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
  }
};

// dark mode