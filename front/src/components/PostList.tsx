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
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
