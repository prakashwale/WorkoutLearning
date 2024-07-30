document.addEventListener("DOMContentLoaded", () => {
    //Registration Form Handling 
    const registrationForm  = document.getElementById('registration');
    if (registrationForm) {
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const usernameOutput = document.getElementById('usernameOutput');
        const emailOutput = document.getElementById('emailOutput');
        const passwordOutput = document.getElementById('passwordOutput');

        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let valid = true;

            if (usernameInput.value.length < 2) {
                usernameOutput.textContent = "Username must be at least 2 characters long.";
                usernameOutput.style.display = "block";
                valid = false;
            } else {
                usernameOutput.style.display = "none";
            }

            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(emailInput.value)) {
                emailOutput.textContent = "Please enter a valid email address.";
                emailOutput.style.display = "block";
                valid = false;
            } else {
                emailOutput.style.display = "none";
            }

            if (passwordInput.value.length < 8) {
                passwordOutput.textContent = "Password must be at least 8 characters long.";
                passwordOutput.style.display = "block";
                valid = false;
            } else {
                passwordOutput.style.display = "none";
            }

            if (valid) {
                alert('Registration successful!');
                window.location.href = "workouts.html";
            }
        });
    }

    
    const contactForm = document.getElementById('contactForm');
    //contact Form Handling
    if(contactForm) {
        const name = document.getElementById('name');

        const nameFeedback = document.getElementById('nameFeedback');
        
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let valid = true;
            if (name.value.length < 2) {
                nameFeedback.textContent = "Username must be at least 2 characters long.";
                nameFeedback.style.display = "block";
                valid = false;
            } else {
                nameFeedback.style.display = "none";
            }
            if (valid) {
                alert('Sent successful!');
                contactForm.reset();
            }
        });
    }


    const loginForm = document.getElementById('loginForm');
    //login Form Handling
    const DEFAULT_USERNAME = 'prakashraj';
    const DEFAULT_PASSWORD = '8989436';
    if (loginForm) {
        const loginUsernameInput = document.getElementById('loginUsername');
        const loginPasswordInput = document.getElementById('loginPassword');
        const loginFeedback = document.getElementById('loginFeedback');

        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            if (loginUsernameInput.value === DEFAULT_USERNAME && loginPasswordInput.value === DEFAULT_PASSWORD){
                alert('Login successful!');
                loginFeedback.style.display = "none";
                window.location.href = "workouts.html";
            } else {
                loginFeedback.textContent = "Invalid username or password.";
                loginFeedback.style.display = "block";
            }
        });
    }

    //Upper and Lower Body Workout image hover functionality
    const images = document.querySelectorAll("#img img");
    for (let image of images) {
        const oldURL = image.src;
        const newURL = image.id;
        image.addEventListener("mouseover", () => {
            image.src = newURL;
        });
        image.addEventListener("mouseout", () => {
            image.src = oldURL;
        });
        setTimeout(()=> image.src = newURL, 1000);

        setTimeout(()=>image.src = oldURL, 2000);
    }

    //Workout Questions hover functiionality
    $(document).ready(() => {
        $('h2').hover(
            function() {
                $(this).next('p').slideDown();
            },
            function() {
                $(this).next('p').slideUp();
            }
        );
    });

    //Image Description hover functionality
    $(document).ready(() => {
        $('.imageDescription').hover(
            function() {
                $(this).next('p').slideDown();
            },
            function() {
                $(this).next('p').slideUp();
            }
        );
    });

});
