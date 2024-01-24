import axios from 'axios';

const API_BASE_URL = "http://localhost:3001/";

//index表示関数
export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching posts:', error);
    throw error;
  }
};

//new,create用関数
export const createPost = async (postData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/posts`, postData)
  } catch (error) {
    console.error('Error while creating Posts', error);
    throw error;
  }
};

//edit,update関数
export const updatePost =async (postId: number, postData:any) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/posts/${postId}`, postData);
    return response.data;
  } catch (error) {
    console.error('Error while updating Post', error);
    throw error;
  }
};

//delete関数
export const deletePost =async (postId:number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error('Error while deleting Posts;', error)
    throw error;
  }
}