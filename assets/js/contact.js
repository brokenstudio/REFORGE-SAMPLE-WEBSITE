/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

// ✅ Initialize EmailJS
emailjs.init('zT_yXH-_sHeWILXSR')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
        'service_4sbv7ja',
        'template_7ig9bqh',
        contactForm
    )
    .then(() => {
        // ✅ Success message
        contactMessage.textContent = 'Message sent successfully ✅'
        contactMessage.style.color = 'green'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    })
    .catch((error) => {
        console.error(error) // ✅ shows real error in console

        contactMessage.textContent = 'Message not sent ❌'
        contactMessage.style.color = 'red'
    })
}

// ✅ Prevent error if form not found
if (contactForm) {
    contactForm.addEventListener('submit', sendEmail)
}
