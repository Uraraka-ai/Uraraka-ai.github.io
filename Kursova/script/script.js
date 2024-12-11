function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const burgerIcon = document.querySelector('.burger-menu');

    navLinks.classList.toggle('open');
    burgerIcon.innerHTML = navLinks.classList.contains('open') ? '&#10005;' : '&#9776;';
}
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');

    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
}

document.querySelector(".book-btn").addEventListener("click", function(event) {
    event.preventDefault();
    openModal();
});

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: false,
        slidesPerGroup: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });
});
