const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.menu-1-and-menu-2');
const bars = document.querySelectorAll('.line');


hamburger.addEventListener("click", () => {
    
    navLinks.classList.toggle("open");
    navLinks.classList.add("activated");

    bars.forEach(bar => {
        bar.classList.toggle('x')
    });

    hamburger.classList.toggle('open-hamburger');

});


window.addEventListener("resize", () => {
    
    navLinks.classList.remove("activated");
    
});