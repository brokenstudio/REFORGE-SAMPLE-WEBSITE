/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// Show menu
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Hide menu
if (navClose && navMenu) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header')

    if (!header) return // ✅ safety check

    if (window.scrollY >= 50) {
        header.classList.add('bg-header')
    } else {
        header.classList.remove('bg-header')
    }
}

window.addEventListener('scroll', bgHeader)


/*=============== DARK / LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Check saved preferences
const savedTheme = localStorage.getItem('selected-theme')
const savedIcon = localStorage.getItem('selected-icon')

// Get current values
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? 'sun' : 'moon'

// Apply saved theme
if (savedTheme && themeButton) {
    document.body.classList[savedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[savedIcon === 'sun' ? 'add' : 'remove'](iconTheme)
}

// Toggle theme
if (themeButton) {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        // Save preferences
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
}


/*=============== CLOSE MENU ON LINK CLICK (BONUS UX) ===============*/
const navLinks = document.querySelectorAll('.nav__link')

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('show-menu')
    })
})
