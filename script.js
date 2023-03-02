
const menuHamburger = document.querySelector(".menu-hamburger")
const naviLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click', () => {
    naviLinks.classList.toggle('mobile-menu')
})