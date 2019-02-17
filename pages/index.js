import React from 'react';
import { Button, CardActions, CardHeader, Card } from '@material-ui/core';
import 'isomorphic-fetch';

import Header from '../components/Header';

const Index = ({ posts = [] }) => (
  <div>
    <Header />
    {posts.map((p) => (
      <Card key={p.id}>
        <CardHeader title={p.title} />
        <CardActions>
          <Button variant="contained" color="primary" fullWidth>
            Click to view posts!
          </Button>
        </CardActions>
      </Card>
    ))}
  </div>
);

Index.getInitialProps = async () => {
  const response = await fetch(
    `${process.env.BLOGGER_URL}?key=${process.env.API_KEY}`
  );
  const data = await response.json();

  return { posts: data.items };
};

export default Index;
