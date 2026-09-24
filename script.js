const footer = document.querySelector("footer");

if (footer) {
    const year = new Date().getFullYear();

    footer.innerHTML = `
        <strong>YATUPE</strong>
        <p>Barbería · San Juan</p>
        <span>© ${year} YaTuPe — Todos los derechos reservados.</span>
    `;
}
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {

    if (nav.classList.contains("menu-open")) {

        nav.classList.add("menu-closing");

        nav.addEventListener("animationend", () => {
            nav.classList.remove("menu-open");
            nav.classList.remove("menu-closing");
        }, { once: true });

    } else {

        nav.classList.add("menu-open");

    }

});
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("menu-open");
        nav.classList.remove("menu-closing");
    });
});