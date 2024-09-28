import axios from "axios";

// Handle User Services
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
          "apiKey": "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        },
      }
    );

    console.log("Register Success", response);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const loginUser = () => {};

export const logoutUser = () => {};

export const deleteAccountUser = () => {};
