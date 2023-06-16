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
document
  .getElementById("login-form")
  .addEventListener("login", function (event) {
    event.preventDefault();

    var nickname = document.getElementById("nickname").value;
    localStorage.setItem("nickname", nickname);

    window.location.href = "afterLogin.html";
  });
