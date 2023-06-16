const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
  e.preventDefault();
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const cpass = document.getElementById("cpass").value;

  localStorage.setItem("FirstName", fname);
  localStorage.setItem("LastName", lname);
  localStorage.setItem("Email", email);
  localStorage.setItem("Password", pass);
  localStorage.setItem("Cpassword", cpass);
  if (fname == "" && lname == "" && email == "" && pass == "" && cpass == "") {
    Swal.fire("Opps..!", "input field has no value!", "error");
  } else {
    if (pass.length >= 6 && pass.length <= 20) {
      if (pass !== cpass) {
        Swal.fire("Opps..!", "Password not matching!", "error");
      } else {
        Swal.fire("Good job!", "Register successful!", "success");
        setTimeout(() => {
          location.href = "index.html";
        }, 5000);
      }
    } else {
      Swal.fire("Opps..!", "Input mim six digit password!", "error");
    }
  }
};

// login function
const login = document.querySelector(".login");
login.onclick = (e) => {
  e.preventDefault();
  const emailAddress = document.getElementById("emailAddress").value;
  const passWord = document.getElementById("passWord").value;

  const Email = localStorage.getItem("Email");
  const Password = localStorage.getItem("Password");

  if (emailAddress === "" || passWord === "") {
    Swal.fire("Opps..!", "Input field has no value!", "error");
  } else {
    if (emailAddress === Email && passWord === Password) {
      var nickname = document.getElementById("nickname").value;
      localStorage.setItem("nickname", nickname);

      Swal.fire("Good job!", "Login successful!", "success");
      setTimeout(() => {
        location.href = "afterLogin.html";
      }, 1000);
    } else {
      Swal.fire("Opps..!", "Something is wrong!", "error");
    }
  }
};

// input nickname pas login
document.getElementById("login-form").addEventListener("login", function (event) {
  event.preventDefault();

  var nickname = document.getElementById("nickname").value;
  localStorage.setItem("nickname", nickname);

  window.location.href = "afterLogin.html";
});

// afterLogin.html
document.addEventListener("DOMContentLoaded", function () {
  var nickname = localStorage.getItem("nickname");
  document.getElementById("result").textContent = nickname;
});
