import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './globalStyles';
import theme from './theme';
import Header from './components/Header/header';
import Playground from './components/Playground/playground';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <Playground />        
        <Footer />
      </ThemeProvider>
    </>
    
  );
};


export default App