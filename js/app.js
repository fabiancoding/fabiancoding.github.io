const darkMode = document.querySelector('body');
const darkModeIcon = document.querySelector('.dark-mode-icon');
const lightModeIcon = document.querySelectorAll('.light_mode_icon'); 
const darkModeLinks = document.querySelectorAll('a');
const lightModeSVGBlackLetters = document.querySelectorAll('.color_black');
const lightModeSVGiceWhiteBackgroundAndBlackBorder = document.querySelectorAll('.color_ice_white_and_black');
const lightModeSVGgrays = document.querySelectorAll('.color_gray');
const lightModeButtons = document.querySelectorAll('button');
const footerLightMode = document.querySelector('footer');

darkModeIcon.addEventListener ("click", () => {

    darkMode.classList.toggle("dark-mode");

    footerLightMode.classList.toggle("footer-light-mode");

    lightModeIcon.forEach(lightModeIco => {
        lightModeIco.classList.toggle("light-mode-icon");
    });

    darkModeLinks.forEach(darkModeLink => {
        darkModeLink.classList.toggle("dark-mode-links");
    });

    lightModeSVGBlackLetters.forEach(lightModeSVGBlackLetter => {
        lightModeSVGBlackLetter.classList.toggle("light-mode-svg-black-letters");
    });

    lightModeSVGgrays.forEach(lightModeSVGgray => {
        lightModeSVGgray.classList.toggle("light-mode-svg-gray");
    });

    lightModeSVGiceWhiteBackgroundAndBlackBorder.forEach(iceWhiteBackgroundAndBlackBorder => {
        iceWhiteBackgroundAndBlackBorder.classList.toggle("light-mode-svg-ice-white-background-and-black-border");
    });

    lightModeButtons.forEach(lightModeButton => {
        lightModeButton.classList.toggle("light-mode-button");
    });

    bars.forEach(bar => {
        bar.classList.toggle("light-mode-button")
    });

    navLinks.classList.toggle("light-mode-background");

});


const hamburger = document.querySelector('.hamburger');
const bars = document.querySelectorAll('.line');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("open");
    navLinks.classList.add("activated");

    bars.forEach(bar => {
        bar.classList.toggle('x')
    });

    links.forEach(link => {
        link.classList.toggle('fade')
    });

});



window.addEventListener("resize", () => {
    
    navLinks.classList.remove("activated");
    
});


links.forEach(link => {
    link.addEventListener("click", () => {

        navLinks.classList.remove("open");
        navLinks.classList.add("activated");
    
        bars.forEach(bar => {
            bar.classList.remove('x')
        });
    
        links.forEach(link => {
            link.classList.remove('fade')
        });

    });
});