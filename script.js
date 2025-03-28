/* basculer l'icône de la barre de navigation */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active")
}


/* Scroll sections */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            /* barre de navigation  */
            navLinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id +"]").classList.add("active");
            });
           /*  sections actives pour l'animation lors du scroll */
           sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    /* Header Figé */
    let header = document.querySelector("header");  

    header.classList.toggle("sticky" , window.scrollY > 100);

    /* supprimer icône bascule et la barre de navigation lorsque cliques sur les liens de la barre de navigation (scroll) */
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active")

    /* animation footer lors du scroll */
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

