// app.js

// Handle Sign-Up Form Submission
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Hide any previous error messages
        const errorMessage = document.getElementById('signup-error-message');
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';

        // Show loading animation
        const signupButton = document.getElementById('signup-button');
        const buttonText = document.getElementById('signup-button-text');
        const spinner = document.getElementById('signup-spinner');

        buttonText.style.display = 'none';
        spinner.style.display = 'block';

        // Disable the button to prevent multiple clicks
        signupButton.disabled = true;

        // Simulate a delay (e.g., processing the sign-up)
        setTimeout(() => {
            // Hide loading animation
            buttonText.style.display = 'block';
            spinner.style.display = 'none';
            signupButton.disabled = false;

            // Simulate user registration success
            // alert('Registration successful!');

            // Set user as authenticated
            sessionStorage.setItem('authenticated', 'true');

            // Redirect to privacy policy page
            window.location.href = 'gamified-privacy-01.html';
            localStorage.setItem('progressValue', 0);
        }, 1000); // 1 second delay
    });
}

// Handle Login Form Submission
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Hide any previous error messages
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';

        // Show loading animation
        const loginButton = document.getElementById('login-button');
        const buttonText = document.getElementById('button-text');
        const spinner = document.getElementById('spinner');

        buttonText.style.display = 'none';
        spinner.style.display = 'block';

        // Disable the button to prevent multiple clicks
        loginButton.disabled = true;

        // Simulate a delay (e.g., waiting for server response)
        setTimeout(() => {
            // Hide loading animation
            buttonText.style.display = 'block';
            spinner.style.display = 'none';
            loginButton.disabled = false;

            // Display error message directly without reloading
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Username/password is incorrect.';
        }, 1000); // 1 second delay
    });
}

// Display error message if redirected back with #error
if (window.location.pathname.endsWith('index.html') && window.location.hash === '#error') {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Username/password is incorrect.';
        // Optionally, remove the hash from the URL
        // history.replaceState(null, null, ' ');
    }
}

// Protect Privacy Policy Page
if (window.location.pathname.endsWith('privacy.html')) {
    if (sessionStorage.getItem('authenticated') !== 'true') {
        // User is not authenticated, redirect to login
        window.location.href = 'index.html';
    }
}
if (window.location.pathname.endsWith('privacy.html')) {
    // Get the checkbox and button elements
    const agreeCheckbox = document.getElementById('agree-checkbox');
    const agreeButton = document.getElementById('agree-button');

    // Listen for changes on the checkbox
    agreeCheckbox.addEventListener('change', () => {
        if (agreeCheckbox.checked) {
            // Enable the button
            agreeButton.disabled = false;
            agreeButton.classList.remove('cursor-not-allowed', 'opacity-50');
            agreeButton.classList.add('hover:bg-blue-700', 'focus:outline-none', 'focus:bg-blue-700');
        } else {
            // Disable the button
            agreeButton.disabled = true;
            agreeButton.classList.add('cursor-not-allowed', 'opacity-50');
            agreeButton.classList.remove('hover:bg-blue-700', 'focus:outline-none', 'focus:bg-blue-700');
        }
    });

    // Handle button click
    agreeButton.addEventListener('click', () => {
        // Redirect to the next page
        window.location.href = 'next.html';
    });
}
