// 🌙 Dark Mode
const btn = document.getElementById("darkModeToggle");

btn.onclick = function () {
    document.body.classList.toggle("dark");
};

// 🎬 Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});

// 📱 Mobile Menu Toggle
const menuBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuBtn.onclick = function () {
    navLinks.classList.toggle("show");
};
