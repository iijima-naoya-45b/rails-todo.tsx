import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeRouter from './HomeRouter';
import PostRouter from './PostRouter';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRouter />} />
        <Route path="/posts/*" element={<PostRouter />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
