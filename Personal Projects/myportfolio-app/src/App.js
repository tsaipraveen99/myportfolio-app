import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';

const theme = createTheme({
  // Customize your theme here
});

const globalStyles = {
  body: {
    margin: 0,
    padding: 0,
    background: 'black',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;