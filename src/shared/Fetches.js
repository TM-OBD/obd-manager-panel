import axios from "axios";

export const sendUserData = async (data) => {
  try {
    const response = await axios.post("/api/v1/initial_user_data", data, {});
    console.log("User data sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending user data:", error);
    if (error.response && error.response.data) {
      console.error("Backend error:", error.response.data);
      return {success: false, message: error.response.status + " " + error.response.statusText}
    } else {
      return {success: false, message: "Failed to send feedback data"}
    }
  }
};
