const submitBtn = document.querySelector('.btn');

const patterns = {
	'fname':/^\w+( +\w+)*$/g,
	'lname':/^\w+( +\w+)*$/g,
	'email':/^[\w0-9]+@[a-zA-Z]\.[a-zA-Z]+/g,
};

const pass1 = document.querySelector('#password1');
const pass2 = document.querySelector('#password2');


function validatePassword() {
	if(pass1.value !== pass2.value) {
		pass1.classList.remove('valid');
		pass2.classList.remove('valid');

		pass1.classList.add('error');
		pass2.classList.add('error');
		return;
	}

	console.log(pass1.value)

	const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{8, 16}$/;
	const isValidPass = regex.test(pass1.value);


	if (isValidPass) {
		pass1.classList.add('error');
	} else {
		pass1.classList.remove('error');
		pass2.classList.remove('error');

		pass1.classList.add('valid');
		pass2.classList.add('valid');

	}
}

function validateForm(e) {


}

pass2.addEventListener('change', validatePassword)