import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from './globalStyles';
import theme from './theme';
import Header from './components/Header/header';
import Playground from './components/Playground/playground';
import Footer from './components/Footer/footer';
import ExamplePage from './components/ExamplePage/examplePage';


class App extends React.Component{
  render(){
    return(
      <Router>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Playground />} />
            <Route path="/example"  element={<ExamplePage />} />
            
            
          </Routes>

          <Footer />
        </ThemeProvider>
      </Router>
    )
  }
}


export default App