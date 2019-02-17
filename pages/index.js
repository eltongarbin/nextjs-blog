import React from 'react';
import Header from '../components/Header';

const Index = ({ title = 'Hello from next.js' }) => (
  <div>
    <Header />
    <h2>{title}</h2>
  </div>
);

export default Index;
