const button = document.getElementById('header--signup');
const form = document.querySelector('.inscription');

button.addEventListener('click', () =>{
    form.classList.toggle('open')
})