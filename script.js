const myNav = document.querySelector("nav");
const logoExpand = document.querySelector(".navLogo");

window.onscroll = function () {
    if (document.body.scrollTop || document.documentElement.scrollTop >=100 ) {
        myNav.classList.add("nav-colored");
        logoExpand.classList.add("logoExpand");
    }
    else {
        myNav.classList.remove("nav-colored");
        logoExpand.classList.remove("logoExpand");
    }
};
window.onbeforeunload = function(){ window.scrollTo(0,0); }


const hamburger = document.getElementById("hamburger");
const show = document.querySelector("nav > ul");

hamburger.addEventListener('click', () => hamburgerFunction());

function hamburgerFunction(){
hamburger.classList.toggle("navbar-on");
show.classList.toggle("showLinks");
}
