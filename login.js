function store() {
  var name = document.getElementById("name");
  var pw = document.getElementById("pw");
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if (email.value.length == 0 && pw.value.length == 0) {
    alert("Please fill in email and password");
  } else {
    localStorage.setItem("email", email.value);
    localStorage.setItem("pw", pw.value);
    alert("Your account has been created");
    window.location.href = "login.html";
  }
}

//checking
function check() {
  var storedName = localStorage.getItem("email");
  var storedPw = localStorage.getItem("pw");

  var userName = document.getElementById("email");
  var userPw = document.getElementById("pw");
  var userRemember = document.getElementById("rememberMe");

  if (userName.value == storedName && userPw.value == storedPw) {
    alert("You are logged in.");
    window.location.href = "index.html";
  } else {
    alert("Error on login");
  }
}
