nav = document.getElementById("nav");

document.getElementById("menu").addEventListener('click', () => {
    nav.classList.toggle("hide-mobile");
});

document.getElementById("exit").addEventListener('click', () => {
    nav.classList.toggle("hide-mobile");
});

nav.addEventListener('click', () => {
    nav.classList.toggle("hide-mobile");
});