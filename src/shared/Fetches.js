import axios from "axios"

export const sendUserData = async (data) => {
  try {
      const response = await axios.post('/api/v1/user_data', data, {
          headers: {
            //   'token': `Bearer ${token}`,
            //   'feedback-source-ip': feedbackSourceIP
          }
      });
      console.log('User data sent successfully:', response.data);
      return response.data;
  } catch (error) {
      console.error('Error sending user data:', error);
      if (error.response && error.response.data) {
          console.error('Backend error:', error.response.data);
          throw new Error(error.response.data.description);
      } else {
          throw new Error('Failed to send feedback data');
      }
  }
};