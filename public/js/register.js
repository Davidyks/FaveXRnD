function validateName(){
  let inputName = document.querySelector("#name");
  let valueName = inputName.value;
  let errorName = document.querySelector("#error-name");

  if (valueName == "") {
      errorName.innerHTML = "Name cannot be empty!";
      inputName.style.borderBottom = "2px solid red";
      inputName.placeholder = "";
      return false;
  } else {
      errorName.innerHTML = "";
      inputName.style.borderBottom = "2px solid #392A2A";
      return true;
  }
}

function validateEmail() {
  let inputEmail = document.querySelector("#email");
  let valueEmail = inputEmail.value;
  let errorEmail = document.querySelector("#error-email");
  if (valueEmail == "") {
  errorEmail.innerHTML = "Email cannot be empty!";
  inputEmail.style.borderBottom = "2px solid red";
  inputEmail.placeholder = "";
  return false;
  } else if (!valueEmail.endsWith("@gmail.com")) {
  errorEmail.innerHTML = "Email must contain '@gmail.com'!";
  inputEmail.style.borderBottom = "2px solid red";
  return false;
  }else {
  errorEmail.innerHTML = "";
  inputEmail.style.borderBottom = "2px solid #392A2A";
  return true;
  }
}

function validateAlamat() {
  let inputAlamat = document.querySelector("#alamat");
  let valueAlamat = inputAlamat.value;
  let errorAlamat = document.querySelector("#error-alamat");

  if (valueAlamat === "") {
  errorAlamat.innerHTML = "Address cannot be empty!";
  inputAlamat.style.border = "2px solid red";
  inputAlamat.placeholder = "";
  return false;
  } else {
  errorAlamat.innerHTML = "";
  inputAlamat.style.border = "2px solid #392A2A";
  return true;
  }
}

function validateNumber() {
  let inputNumber = document.querySelector("#number");
  let valueNumber = inputNumber.value;
  let errorNumber = document.querySelector("#error-number");

  if (valueNumber === "") {
  errorNumber.innerHTML = "Number cannot be empty!";
  inputNumber.style.borderBottom = "2px solid red";
  inputNumber.placeholder = "";
  return false;
  } else if (isNaN(valueNumber)) {
  errorNumber.innerHTML = "Only numbers are allowed!";
  inputNumber.style.borderBottom = "2px solid red";
  return false;
  } else if(valueNumber.length < 9 || valueNumber.length > 12){
  errorNumber.innerHTML = "Number has to be between 9-12 digits!";
  inputNumber.style.borderBottom = "2px solid red";
  return false;
  } else if(valueNumber.substring(0,2) != "08"){
  errorNumber.innerHTML = "Number has to start with 08!";
  inputNumber.style.borderBottom = "2px solid red";
  return false;
  } else {
  errorNumber.innerHTML = "";
  inputNumber.style.borderBottom = "2px solid #392A2A";
  return true;
  }
}

function validateBday(){
  let inputBday = document.querySelector("#bday");
  let valueBday = inputBday.value;
  let errorBday = document.querySelector("#error-bday");
  if (valueBday == "") {
      errorBday.innerHTML = "Birthday cannot be empty!";
      inputBday.style.borderBottom = "2px solid red";
      inputBday.placeholder = "";
      return false;
  }
  else {
      errorBday.innerHTML = "";
      inputBday.style.borderBottom = "2px solid #3F92A2A";
      return true;
  }
}

function validatePassword(){
let inputPassword = document.querySelector("#password");
let valuePassword = inputPassword.value;
let errorPassword = document.querySelector("#error-password");

var hasLowerCase = /[a-z]/.test(valuePassword);
var hasUpperCase = /[A-Z]/.test(valuePassword);
var hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(valuePassword);

if (valuePassword == "") {
errorPassword.innerHTML = "Password cannot be empty!";
inputPassword.style.borderBottom = "2px solid red";
inputPassword.placeholder = "";
return false;
} else if(valuePassword.length < 8 || !hasLowerCase || !hasUpperCase || !hasSpecialChar){
errorPassword.innerHTML = "Password must be at least 8 characters long and include at least one lowercase character, one uppercase character, and one special character!";
inputPassword.style.borderBottom = "2px solid red";
return false;
} else {
errorPassword.innerHTML = "";
inputPassword.style.borderBottom = "2px solid #392A2A";
return true;
}
}

function shakeElement() {
  const element = document.getElementById('screen');
  element.classList.add('error-shake');
  setTimeout(() => {
    element.classList.remove('error-shake');
  }, 300); 
}

let sendBtn = document.querySelector("#send-btn");
sendBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let form = document.querySelector("#form");
  let isNameValid = validateName();
  let isEmailValid = validateEmail();
  let isAlamatValid = validateAlamat();
  let isNumberValid = validateNumber();
  let isBdayValid = validateBday();
  let isPasswordValid = validatePassword();
  if (isNameValid&&isEmailValid&&isAlamatValid&&isNumberValid&&isBdayValid&&isPasswordValid) {
      console.log("submit", form)
      form.submit();
  }else{
    shakeElement();
  }
});