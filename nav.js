let nav = document.querySelector("nav");

window.onscroll = () => {
    if(window.scrollY > 100) {
        nav.classList.add("nav-active")
    }
    else {
        nav.classList.remove("nav-active")
    }
}