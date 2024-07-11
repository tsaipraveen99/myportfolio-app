import React, { useEffect, useRef } from 'react';
import { Container, Typography, Box, styled } from '@mui/material';
import { gsap } from 'gsap';

const StyledContainer = styled(Container)({
  background: 'black',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: 'white',
  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
});

const RedSpan = styled('span')({
  color: 'red',
});

function Home() {
  const helloRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(helloRef.current,
      { 
        y: -50, 
        scaleY: -1, // This flips the text vertically
        opacity: 0 
      },
      { 
        duration: 1.5, 
        y: 0, 
        scaleY: 1, // This brings it back to normal
        opacity: 1, 
        ease: "power2.out" 
      }
    );

    tl.fromTo(nameRef.current,
      { x: 200, opacity: 0 },
      { duration: 1, x: 0, opacity: 1, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

  return (
    <StyledContainer>
      <Box my={4}>
        <Typography variant="h2" component="h1" ref={helloRef} style={{ display: 'inline-block', transformOrigin: 'center' }}>
          <RedSpan>Hello</RedSpan>,
        </Typography>
        <Typography variant="h2" component="h1" gutterBottom>
          <span ref={nameRef} style={{ display: 'inline-block' }}> I'm <RedSpan>Sai Praveen Tatiparthi</RedSpan></span>
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          A Software Engineer passionate about creating amazing applications.
        </Typography>
      </Box>
    </StyledContainer>
  );
}

export default Home;