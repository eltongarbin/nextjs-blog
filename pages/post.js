import React from 'react';
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button
} from '@material-ui/core';
import Link from 'next/link';
import 'isomorphic-fetch';

import Header from '../components/Header';

const Post = ({ title, content }) => (
  <div>
    <Header />
    <Card>
      <CardHeader title={title} />
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" fullWidth>
          <Link href="/" as="/blog">
            <a>Go back to blog!</a>
          </Link>
        </Button>
      </CardActions>
    </Card>
  </div>
);

Post.getInitialProps = async ({ query: { id } }) => {
  const response = await fetch(
    `${process.env.BLOGGER_URL}/${id}?key=${process.env.API_KEY}`
  );
  const { title, content } = await response.json();
  return { title, content };
};

export default Post;
