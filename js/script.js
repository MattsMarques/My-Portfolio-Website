const navmenu = document.getElementById("nav-menu")

function openNavbar(){
    navmenu.classList.add('show')
}

function closeNavbar(){
    navmenu.classList.remove('show')
}

const container = document.querySelector(".project-container")

window.onscroll = () => {
    container.style.left = `${-window.scrollY}px`
}