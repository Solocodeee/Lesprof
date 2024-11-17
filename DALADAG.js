window.alert("Beta version under development");

// دالة لتبديل ظهور قائمة الروابط
document.getElementById('menuToggle').addEventListener('click', function() {
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show'); // تبديل كلاس show
});

const icon = document.getElementById('toggleIcon');
const socialLinks = document.getElementById('socialLinks');

icon.addEventListener('click', () => {
    if (socialLinks.style.display === "none" || socialLinks.style.display === "") {
        socialLinks.style.display = "block";
        icon.innerHTML = '&#10005;'; // Change to "X" symbol
    } else {
        socialLinks.style.display = "none";
        icon.innerHTML = '&#9993;'; // Change back to message icon
    }
});
a