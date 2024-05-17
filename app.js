import home from "./controllers/login.js";
//////////////////----------home
const token = localStorage.getItem("token");
async function homefun(params) {
  let resp = await home(params);
  //   console.log(resp);
  if (resp.id) {
    document.getElementById("userName").innerText = "Hi " + resp.name;
  } else {
    window.location.href = "./index.html";
  }
}

if (token) {
  homefun(token);
} else {
  window.location.href = "./index.html";
}
