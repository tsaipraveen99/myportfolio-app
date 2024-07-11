import React from 'react';
import { AppBar, Toolbar, Button, styled } from '@mui/material';

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

function Navigation() {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledButton>Home</StyledButton>
        <StyledButton>About</StyledButton>
        <StyledButton>Projects</StyledButton>
        <StyledButton>Contact</StyledButton>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Navigation;