import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const blogPosts = [
  { id: 1, title: 'My First Blog Post', content: 'Content of the first blog post...' },
  { id: 2, title: 'Learning React', content: 'My journey in learning React...' },
  // Add more blog posts
];

function Blog() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Blog
      </Typography>
      {blogPosts.map((post) => (
        <Card key={post.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2">
              {post.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Blog;
