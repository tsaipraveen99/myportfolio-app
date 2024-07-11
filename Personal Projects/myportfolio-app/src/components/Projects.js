import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of Project 1', image: 'url_to_image1' },
  { id: 2, title: 'Project 2', description: 'Description of Project 2', image: 'url_to_image2' },
  // Add more projects
];

function Projects() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
