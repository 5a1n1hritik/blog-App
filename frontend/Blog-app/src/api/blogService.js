import axios from "axios";

const API_URL = "http://localhost:5000/api/blogs";

export const getBlogs = async (page = 1, limit = 10, search = "") => {
  const response = await axios.get(`${API_URL}/all-blogs`, {
    params: { page, limit, search },
  });
  return response.data;
};

export const getBlogById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}/Singleblog`);
  return response.data;
};

export const createBlog = async (data, token) => {
  try {
    const response = await axios.post(`${API_URL}/new`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error creating blog:",
      error.response?.data?.message || error.message
    );
  }
};

export const updateBlog = async (id, data ) => {
  const response = await axios.put(`${API_URL}/${id}/update`, data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return response.data;
};

export const deleteBlog = async (id, authToken) => {
  const response = await axios.delete(`${API_URL}/${id}/delete`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    withCredentials: true,
  });
  return response.data;
};
