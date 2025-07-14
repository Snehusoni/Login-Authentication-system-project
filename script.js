const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const logioBtn = document.querySelector('.login-btn')

registerBtn.addEventListener('click', () => {
    container.classList.add('active');

});

logioBtn.addEventListener('click', () => {
    container.classList.remove('active');

});