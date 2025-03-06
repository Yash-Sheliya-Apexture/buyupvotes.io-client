// api.js
import axiosInstance from "./axiosInstance";

export const fetchUserData = async () => {
  try {
    const response = await axiosInstance.get("/auth/user");
    console.log("/auth/user 6")
    return response.data; // Return the user data
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Handle error appropriately
  }
};
