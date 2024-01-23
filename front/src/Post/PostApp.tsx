import { useEffect, useState } from 'react';
import { getPosts } from './api';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import '../App.css';

// postの型定義
type Post = {
  id: number;
  title: string;
  description: string;
};

const PostApp = () => {
  // postリストの初期値を空の配列に設定
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPosts();
        setPosts(postsData);
      } catch (error) {
        console.error('Error while fetching post', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Post App</h1>
      <PostForm />
      <PostList posts={posts}/>
    </div>
  );
};

export default PostApp;