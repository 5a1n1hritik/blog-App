import axios from 'axios';

const API_URL = 'http://localhost:5000/api/blogs'; // Replace with your backend URL

export const getBlogs = async (page = 1, limit = 10, search = '') => {
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
  const response = await axios.post(`${API_URL}/new`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateBlog = async (id, data, token) => {
  const response = await axios.put(`${API_URL}/${id}/update`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteBlog = async (id, token) => {
  const response = await axios.delete(`${API_URL}/${id}/delete`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
