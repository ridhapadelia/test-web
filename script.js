
// Contact Form Submission
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Ambil nilai dari input form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Tampilkan alert dengan nilai form
    alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
});


