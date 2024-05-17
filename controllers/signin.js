import API_URI from "../config/global.js";
async function signin(email, password) {
  console.log("1");
  console.log(email);

  console.log(password);

  try {
    const response = await fetch(API_URI + "/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    if (response == "Invalid user name and password") {
      return "Invalid user name and password";
    } else {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
    console.error("Error:", err);
  }

  return "error";
}
export default signin;
