import React from 'react';
import { Button, CardActions, CardHeader, Card } from '@material-ui/core';
import Link from 'next/link';
import 'isomorphic-fetch';

import Header from '../components/Header';

const Index = ({ posts = [] }) => (
  <div>
    <style jsx>{`
      .post-link {
        text-decoration: none;
        color: #fff;
        font-size: 18px;
      }
    `}</style>
    <Header />
    {posts.map((p) => (
      <Card key={p.id}>
        <CardHeader title={p.title} />
        <CardActions>
          <Button variant="contained" color="primary" fullWidth>
            <Link href={`/post?id=${p.id}`} as={`/blog/${p.id}`}>
              <a className="post-link">Click to view posts!</a>
            </Link>
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
