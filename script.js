const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

loginLink.addEventListener('click', () => {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    loginLink.classList.add('active');
    registerLink.classList.remove('active');
});

registerLink.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    loginLink.classList.remove('active');
    registerLink.classList.add('active');
});

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Assuming successful registration, show the popup
    popup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});