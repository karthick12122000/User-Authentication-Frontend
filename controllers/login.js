import API_URI from "../config/global.js";
async function login(token) {
  try {
    const response = await fetch(API_URI + "/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });

    if (!response.ok) {
      console.log("data");
      throw new Error(`Request failed with status: ${response.status}`);
      return "error";
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.error("Error:", err);
    return "error";
  }
}
export default login;
