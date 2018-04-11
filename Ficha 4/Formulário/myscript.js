//myscript
//Documentation: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation
let email = document.getElementById("email");
let confEmail = document.getElementById("confEmail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("É esperado um email!(exemplo@exemplo)");
  } else {
    email.setCustomValidity("");
  }
});
confEmail.addEventListener("input", function (event) {
    if (confEmail.validity.typeMismatch) {
        confEmail.setCustomValidity("É esperado um email!(exemplo@exemplo)");
    } else {
        confEmail.setCustomValidity("");
    }
  });

let signUp = document.getElementById("createProfile");
signUp.addEventListener("submit" , function(e){
	e.preventDefault();
})