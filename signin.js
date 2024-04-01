import API_URI from "./config/global.js";
import signin from "./controllers/signin.js";

////////////////////////////////////--------signin
function validatesigninForm() {
  let flag;
  const email = document.getElementById("floatingInput");
  const emailerr = document.getElementById("emailerr");
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  if (email.value === "") {
    flag = true;
    emailerr.innerText = "Email should not be empty!";
  } else if (emailPattern.test(email.value) === false) {
    emailerr.innerText = "Please enter a valid email address";
  } else {
    emailerr.innerText = "";
  }
  const password = document.getElementById("floatingPassword");
  const Passworderr = document.getElementById("Passworderr");

  if (password.value === "") {
    flag = true;
    Passworderr.innerText = "Password  should not be empty!";
  } else if (password.value.length < 8) {
    flag = true;
    Passworderr.innerText = "Password cannot be less than 8 characters";
  } else {
    Passworderr.innerText = "";
  }
  if (flag) {
    return false;
  }
  return true;
}
document.getElementById("signin").addEventListener("click", async () => {
  console.log("test");
  const freaze = document.getElementById("freaze");
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  if (alertPlaceholder.innerHTML == "") {
    let form = await validatesigninForm();
    if (form) {
      freaze.style.display = "flex";

      const email = document.getElementById("floatingInput");

      const Password = document.getElementById("floatingPassword");

      let response = await signin(email.value, Password.value);
      console.log(response);
      if (response != null) {
        let signupF = document.getElementById("signupF");
        const appendAlert = (message, type) => {
          const wrapper = document.createElement("div");
          wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            "</div>",
          ];
          const alertPlaceholderCheck = document.getElementById(
            "liveAlertPlaceholder"
          );
          if (alertPlaceholderCheck.innerHTML == "") {
            alertPlaceholder.append(wrapper);
            freaze.style.display = "none";
          }
        };

        appendAlert("Please check your email for verification.", "success");
      } else if (response === false) {
        const emailerr = document.getElementById("emailerr");
        emailerr.innerText =
          "An account already exists for this email address.";
        freaze.style.display = "none";
      }
    }
  }
});
