import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function Contact() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Contact Me
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
