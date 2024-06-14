const menuHamburger = document.querySelector(".menu_hamburger"); 
const navLinks = document.querySelector(".nav_links");

menuHamburger.addEventListener('click',()=>{;
    navLinks.classList.toggle('mobile_menu');
});

function scrollIntoViewWithOffset(selector, offset) {
    window.scrollTo({
      behavior: 'smooth',
      top:
        document.querySelector(selector).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    });

    if (selector !== '#A-propos') {
        navLinks.classList.toggle('mobile_menu');
    }
  }