import API_URI from "../config/global.js";
async function signin(email, password) {
  try {
    const response = await fetch(API_URI + "/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = response;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    console.error("Error:", err);
  }

  return "error";
}
export default signin;
