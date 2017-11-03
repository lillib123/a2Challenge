user = {
  email: "coolguy@gmail.com",
  password: "ILoveCoffee",
  name: "Grant Chirpus"
};


var info = document.getElementsByClassName("forms");
var sign_in_form = document.getElementById("outside_field");
var welcome_div = document.getElementById("welcome_outside");
var welcome_user = document.getElementById("welcome_user");

welcome_div.style.display = "none";

function checkLogin() {
  var email_entered = info[0].value;
    email_entered = email_entered.toLowerCase()
  var pw_entered = info[1].value;

  if (email_entered === "coolguy@gmail.com") {
    var email_match = true;
  } else email_match = false;
  if (pw_entered === "ILoveCoffee") {
    var pw_match = true;
  }else pw_match = false;

if (email_match === true && pw_match === false) {
  alert("Your email is recognized, but your password is wrong.")
} else if (email_match === false && pw_match === true) {
  alert("We don't recognize that email.");
} else if (email_match === false && pw_match === false) {
  alert("Invalid username and password.")
} else if (email_match === true && pw_match === true) {
  console.log("log in");
  sign_in_form.style.display = "none";
  welcome_outside.style.display = "block"
  welcome_user.innerText = "Welcome, " + user.name + "!";
  logIn();
}

}

function logIn() {


}
