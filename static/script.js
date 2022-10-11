/* funçao do menu no modo mobile*/

let menuMobile = document.querySelector('.icon-mobile')
let body = document.querySelector('body')



menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle('menu-nav-active');
});



/* funçao fecha menu */

let navItem = document.querySelectorAll(".nav-item")

navItem.forEach(item => {
    /* toda vez que for clicado */
    item.addEventListener('click', () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    });
});

/* animaçao */


const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85
    item.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add('animate');
        }else{
            element.classList.remove('animate');
        }
    });

};
animeScroll()

window.addEventListener("scroll", () => {
    animeScroll();
    
})

/* botao loading */

const btnEnviar = document.querySelector("#btn-enviar")
const btnEnviarLoader = document.querySelector("#btn-loading")

btnEnviar.addEventListener('click', () => {
    btnEnviarLoader.style.display = "block";
    btnEnviar.style.display = "none"

})

setTimeout(() => {
    document.querySelector("#alerta").style.display = "none";
}, 8000);

