// menu icon navbar

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

// remove menu icon navbar when click navbar link (scroll)
menuicon.classList.remove('bx-x');
navbar.classList.remove('active');




const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});

// scroll section active link 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <= offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


//===========================sticky navbar============================//

let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);

// remove menu icon navbar when click navbar link (scroll)
menuicon.classList.remove('bx-x');
navbar.classList.remove('active');

};

// contact type


    // Get the form element
    const form = document.querySelector('.contact form');

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the input field values
        const fullNameInput = form.querySelector('input[type="text"][placeholder="Full Name"]');
        const emailInput = form.querySelector('input[type="email"][placeholder="E-mail Address"]');
        const mobileInput = form.querySelector('input[type="number"][placeholder="Mobile Number"]');
        const subjectInput = form.querySelector('input[type="text"][placeholder="E-mail Subject"]');
        const messageInput = form.querySelector('textarea[placeholder="Your Message"]');

        // Validate the input fields
        if (fullNameInput.value === '' || emailInput.value === '' || mobileInput.value === '' || subjectInput.value === '' || messageInput.value === '') {
            alert('Please fill in all the required fields.');
            return;
        }

        // Perform further actions here, such as sending the form data to a server using AJAX or submitting the form.

        // Reset the form
        form.reset();
    });


