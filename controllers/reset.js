import API_URI from "../config/global.js";
async function reset(token, password) {
  try {
    const response = await fetch(API_URI + "/forgot/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token, password: password }),
    });
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    console.error("Error:", err);
  }

  return "error";
}
export default reset;
