// GENERAL SETUP

const userForm = document.getElementById('userForm');

if (userForm.addEventListener) {
  userForm.addEventListener('submit', userFormValidation);
} else if (userForm.attachEvent) {                  
  form.attachEvent("onsubmit", userFormValidation);
}

function userFormValidation(userEvent) {
  const userFirstName = document.getElementById('userFirstName');
  const userLastName = document.getElementById('userLastName');
  const userBrithday = document.getElementById('userBrithday');
  const userEmail = document.getElementById('userEmail');
  const userPassword = document.getElementById('userPassword');
  const userPassword2 = document.getElementById('userPassword2');
  const validationFilter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  let validationKey = 0;

  // NAME VALIDATION
  let nameError = document.querySelector('.fist-name--error');
  if (userFirstName.value == "") {
    nameError.innerHTML = "Por favor, informe o seu nome!";
    nameError.style.display = "block";
    validationKey += 1;
  } else {
    nameError.style.display = "none";
  }

  // LAST NAME VALIDATION
  let lastNameError = document.querySelector('.last-name--error');
  if (userLastName.value == "") {
    lastNameError.innerHTML = "Por favor, informe o seu sobrenome!";
    lastNameError.style.display = "flex";
    validationKey += 1;
  } else {
    lastNameError.style.display = "none";
  }

  // EMAIL VALIDATION
  let emailError = document.querySelector('.email--error');
  if (userEmail.value == "") {
    emailError.innerHTML = "Por favor, informe o seu e-mail!";
    emailError.style.display = "flex";
    validationKey += 1;
  } else if (validationFilter.test(userEmail.value)) {
    emailError.style.display = "none";
  } else {
    emailError.innerHTML = "Formato de e-mail inválido!";
    emailError.style.display = "flex";
    validationKey += 1;
  }

  // PASSWORD VALIDATION
  let passwordError = document.querySelector('.password--error');
  if (userPassword.value == "") {
    passwordError.innerHTML = "Você precisa escolher uma senha!";
    passwordError.style.display = "flex";
    validationKey += 1;
  } else if (userPassword.value.length < 6) {
    passwordError.innerHTML = "A sua senha precisa ter ao menos 06 (seis) caracteres!";
    passwordError.style.display = "flex";
    validationKey += 1;
  } else {
    passwordError.style.display = "none";
  }

  // PASSWORD CONFIRMATION
  let password2Error = document.querySelector('.password2--error');
  if (userPassword2.value == "") {
    password2Error.innerHTML = "Por favor, confirme a sua senha!";
    password2Error.style.display = "flex";
    validationKey += 1;
  } else if (userPassword2.value.length < 6) {
    password2Error.innerHTML = "A sua senha precisa ter ao menos 06 (seis) caracteres!";
    password2Error.style.display = "flex";
    validationKey += 1;
  } else {
    passwordError.style.display = "none";
  }

  if(userPassword.value != "" && userPassword2.value != "" && userPassword.value != userPassword2.value){
		password2Error.innerHTML = "As senhas precisam ser idênticas!";
		password2Error.style.display = 'flex';
		validationKey += 1;
	}

  // VALIDATION KEY VERIFICATION
  if(validationKey > 0){
		userEvent.preventDefault();
	}
}
