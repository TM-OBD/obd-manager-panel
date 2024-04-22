import axios from "axios";

export const sendUserData = async (data) => {
  try {
    const response = await axios.post("http://46.37.194.186:5001/api/v1/client/associate", data, {});
    console.log("User data sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending user data:", error);
    if (error.response && error.response.data) {
      console.error("Backend error:", error.response.data);
      return error.response.data
    } else {
      return {success: false, message: "Failed to send feedback data"}
    }
  }
};
