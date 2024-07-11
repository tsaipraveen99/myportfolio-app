import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

function Resume() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Resume
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Experience
      </Typography>
      <List>
        <ListItem>
          <ListItemText 
            primary="Software Engineer at TechCorp"
            secondary="2020 - Present"
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Junior Developer at WebSolutions"
            secondary="2018 - 2020"
          />
        </ListItem>
      </List>
      {/* Add more sections like Education, Skills, etc. */}
    </Container>
  );
}

export default Resume;
