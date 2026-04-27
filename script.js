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
async function loadGitHubProjects() {
    let container = document.getElementById("github-projects");

    try {
        let response = await fetch("https://api.github.com/users/sarojkumar-sk/repos");
        let data = await response.json();

        container.innerHTML = "";

        data.forEach(repo => {
            let div = document.createElement("div");
            div.className = "project-card";

            div.innerHTML = `
                <h3>${repo.name}</h3>
                <a href="${repo.html_url}" target="_blank">View Code</a>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        container.innerHTML = "Error loading projects";
    }
}

loadGitHubProjects();
