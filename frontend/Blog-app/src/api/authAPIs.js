// src/api/axiosInstance.js
import axios from "axios";

const authAPIs = axios.create({
  baseURL: "http://localhost:5000/api", // Update with your backend API base URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include cookies (for authentication)
});

export default authAPIs;
