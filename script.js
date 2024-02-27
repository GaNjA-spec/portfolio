document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove the 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add the 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});
