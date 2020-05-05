let btnToggle = document.querySelector('.btn-toggle-navbar');
let navBar = document.querySelector('.main-navbar');

btnToggle.addEventListener('click', () => {
	navBar.classList.toggle('show');
});