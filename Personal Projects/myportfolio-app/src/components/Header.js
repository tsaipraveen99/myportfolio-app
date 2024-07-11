import React from 'react';
import { AppBar, Toolbar, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)({
  background: 'black',
  boxShadow: 'none',
});

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'flex-end',
});

const StyledButton = styled(Button)({
  color: 'white',
  marginLeft: '20px',
  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
});

function Header() {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledButton component={Link} to="/">Home</StyledButton>
        <StyledButton component={Link} to="/projects">Projects</StyledButton>
        <StyledButton component={Link} to="/resume">Resume</StyledButton>
        <StyledButton component={Link} to="/blog">Blog</StyledButton>
        <StyledButton component={Link} to="/contact">Contact</StyledButton>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;