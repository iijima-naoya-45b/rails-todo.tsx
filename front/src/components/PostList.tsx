import React from 'react';

// postの型定義
type Post = {
  id: number;
  title: string;
  description: string;
};

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p> {/* <h3> ではなく <p> を使用 */}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
