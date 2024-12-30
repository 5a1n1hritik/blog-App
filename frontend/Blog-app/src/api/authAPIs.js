import axios from "axios";

const authAPIs = axios.create({
  baseURL: "http://localhost:5000/api/users", 
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

export default authAPIs;
