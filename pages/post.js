import React from 'react';
import Header from '../components/Header';

const Post = ({ title = 'The post will be rendered here!' }) => (
  <div>
    <Header />
    <h2>{title}</h2>
  </div>
);

export default Post;
