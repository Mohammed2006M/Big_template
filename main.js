// change navbar styles on scroll

// window.addEventListener('scroll', () => {
//     document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
// })

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        document.querySelector('nav').classList.add('window-scroll');
    } else {
        document.querySelector('nav').classList.remove('window-scroll');
    }
})



// Show/Hide Faq Answer

let faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Change Icon
        let icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'bx bx-plus') {
            icon.className = "bx bx-minus";
        } else {
            icon.className = "bx bx-plus";
        }
    })
})


// show/hide NAV MENU
let menu = document.querySelector('.nav__menu');
let menuBtn = document.querySelector('#open-menu-btn');
let closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = 'none';
})


let closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = "none"
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav);