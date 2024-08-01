// src/api/api.js
import axios from 'axios'; // Import axios directly from the axios library

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update with your backend URL
});

// Exporting API functions
export const fetchPosts = () => api.get('/posts');
export const fetchPost = (id) => api.get(`/posts/${id}`);
export const createPost = (postData) => api.post('/posts', postData);
export const updatePost = (id, postData) => api.put(`/posts/${id}`, postData);
export const deletePost = (id) => api.delete(`/posts/${id}`);

export const fetchUsers = () => api.get('/users');
export const fetchUser = (id) => api.get(`/users/${id}`);
export const createUser = (userData) => api.post('/users', userData);
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
export const deleteUser = (id) => api.delete(`/users/${id}`);
