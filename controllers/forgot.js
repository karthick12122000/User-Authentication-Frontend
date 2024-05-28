import API_URI from "../config/global.js";
async function forgot(email) {
  console.log(email);
  console.log(API_URI);
  try {
    const response = await fetch(API_URI + "/forgot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
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
export default forgot;
