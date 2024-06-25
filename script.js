// Contoh penggunaan Javascript untuk menambahkan efek animasi
const navLinks = document.querySelectorAll('nav li a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
