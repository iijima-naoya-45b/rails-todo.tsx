import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../components/Home';

const HomeRouter = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Link to="./posts">投稿を見に行く</Link>
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default HomeRouter;
