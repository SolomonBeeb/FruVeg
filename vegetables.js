let header = document.querySelector('header');
let menu = document.querySelector('#menu');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});

/* for navbar*/

let navbar = document.querySelector('.navbar');

menu.onclick = () => { 
    navbar.classList.toggle ('active');
}

window.onscroll = () => { 
    navbar.classList.remove('active');
}

