(function() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset > 50) {
            header.classList.add('header__active')
        } else {
            header.classList.remove('header__active')
        }
    };
})();

const burger_active = document.querySelector('.header__burger')
const burger_close = document.querySelector('.header__nav-close')
const header__nav = document.querySelector('.header__nav')

burger_active.addEventListener("click", function () {
    burger_active.style.display = 'none'
    header__nav.style.display = 'block'      
});

burger_close.addEventListener("click", function () {
    burger_active.style.display = 'block'
    header__nav.style.display = 'none'      
});
