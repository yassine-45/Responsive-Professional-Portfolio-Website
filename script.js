// script.js
//switch mode toggle dark/light
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
document.body.classList.toggle("dark-mode")
})


//switch between ul li list
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#nav-list a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(nav => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
