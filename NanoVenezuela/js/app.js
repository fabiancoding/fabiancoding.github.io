const hamburger = document.querySelector('.hamburger');
const bars = document.querySelectorAll('.line');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const linkAs = document.querySelectorAll('.nav-links li a');


hamburger.addEventListener("click", () => {
    
    navLinks.classList.toggle("open");

    bars.forEach(bar => {
        bar.classList.toggle('x')
    });

    links.forEach(link => {
        link.classList.toggle('fade')
    });

});

linkAs.forEach(linkA => {
    linkA.addEventListener("click", () => {

        navLinks.classList.remove("open");
    
        bars.forEach(bar => {
            bar.classList.remove('x')
        });
    
        links.forEach(link => {
            link.classList.remove('fade')
        });
    });
});

const donar = document.querySelectorAll('.donar');
const donaciones = document.querySelector('div.donaciones');

donar.forEach(dona => {
    dona.addEventListener("click", () => {
        donaciones.classList.add("donaciones-open");
    });
});



const closeWindow = document.querySelector('div.donaciones div.close-window');

closeWindow.addEventListener("click", () => {
    donaciones.classList.remove("donaciones-open");
});



const preload = document.querySelector(".preload");

window.addEventListener("load", () => {
    preload.classList.add("preload-finish");
});
