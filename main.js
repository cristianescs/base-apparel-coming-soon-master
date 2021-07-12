const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInput();
});

function checkInput() {
	// trim to remove the whitespaces
	const emailValue = email.value.trim();

	if(emailValue === '') {
		setErrorFor(email, 'Please enter your email address');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Please provide a valid email');
	} else {
		setSuccessFor(email);
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^\S+@\S+\.\S+$/.test(email);
}



