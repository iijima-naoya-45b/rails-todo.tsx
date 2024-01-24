import React from 'react';
import PostItem from './PostItem';

// postの型定義
type Post = {
  id: number;
  title: string;
  description: string;
};

type PostListProps = {
  posts: Post[];
  onPostDelete: (postId: number) => void;
};

const PostList: React.FC<PostListProps> = ({ posts, onPostDelete }) => {
  const handlePostDelete = (postId: number) => {
    onPostDelete(postId);
  }
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onDelete={handlePostDelete} />
      ))}
    </div>
  );
};

export default PostList;