const signUpBtn = document.getElementById('signUp')
const signInBtn = document.getElementById('signIn')
const container = document.getElementById('container')
const sign = document.getElementById('sign')



signUpBtn.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});



signInBtn.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

sign.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});