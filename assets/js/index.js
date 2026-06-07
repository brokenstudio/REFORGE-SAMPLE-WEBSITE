/*=============== SERVICES MODAL ===============*/
const modals = document.querySelectorAll('.services__modal')
const modalButtons = document.querySelectorAll('.services__button')
const modalCloses = document.querySelectorAll('.services__modal-close')

// Show modal
const showModal = (index) => {
    modals[index].classList.add('active-modal')
}

// Open modal
modalButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        showModal(i)
    })
})

// Close modal (button)
modalCloses.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        modals.forEach((modal) => {
            modal.classList.remove('active-modal')
        })
    })
})

// Close modal (click outside)
modals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active-modal')
        }
    })
})


/*=============== SWIPER TESTIMONIAL ===============*/
const swiperContainer = document.querySelector('.testimonial__swiper')

if (swiperContainer) {
    new Swiper('.testimonial__swiper', {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,

        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },

        breakpoints: {
            768: {
                spaceBetween: 40
            },
            1024: {
                spaceBetween: 50
            }
        }
    })
}


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up')

    if (!scrollUpBtn) return // ✅ safety check

    if (window.scrollY >= 350) {
        scrollUpBtn.classList.add('show-scroll')
    } else {
        scrollUpBtn.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)
