import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import PostApp from '../Post/PostApp';

const PostRouter = () => {

  return (
    <div className="App">
      <Link to="/">TOP画面へ</Link>
      <br />
      <Routes>
        <Route path="/" element={<PostApp />} />
      </Routes>
    </div>
  );
};

export default PostRouter;
