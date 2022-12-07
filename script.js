const patterns = {
	'fname':/^[a-zA-Z]+( +[a-zA-Z]+)*$/g,
	'lname':/^\w+( +\w+)*$/g,
	'phonenumber':/^\d{4}-\d{3}-\d{4}$/,
	'email':/^[\w0-9]+@[a-zA-Z]\.[a-zA-Z]+/g,
};


const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const phonenumber = document.querySelector('#phonenumber');
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

function validate(e) {
	const input = e.currentTarget;
	console.log(patterns[input.id])
	if(patterns[input.id].test(input.value)) {
		console.log("wait what")
		e.currentTarget.classList.remove('error');
		e.currentTarget.classList.add('valid');
	} else {
		e.currentTarget.classList.remove('valid');
		e.currentTarget.classList.add('error');
	}

}


fname.addEventListener('change', validate)
lname.addEventListener('change', validate)
phonenumber.addEventListener('change', validate)
email.addEventListener('change', validate)
pass2.addEventListener('change', validatePassword)