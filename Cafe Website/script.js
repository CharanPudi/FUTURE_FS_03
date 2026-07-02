// Fade-in Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => observer.observe(section));


// Reservation Form

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    alert(`Thank you, ${name}!\n\nYour table reservation has been received.\nWe look forward to serving you!`);

    form.reset();
});


// Highlight Active Navigation Link

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if (scrollY >= top && scrollY < top + height) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.color = "white";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#ffcc80";
        }
    });

});

