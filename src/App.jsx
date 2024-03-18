import React from 'react';
import Dashboard from "./pages/Dashboard.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import Navigation from "./components/Navigation.jsx";
import { ThemeProvider } from './context/ThemeContext.js';
import { Route, Routes } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          return {
            theme: prevState.theme === 'light' ? 'dark' : 'light'
          };
        });
      }
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);

      const elementsToUpdate = document.querySelectorAll('nav, .card, .input_search, .filter_input, .card_detail, .detail_page, .back_button, .border_button');

      elementsToUpdate.forEach(element => {
        if (element) {
          element.setAttribute('data-theme', this.state.theme);
        } else {
          return;
        }

      });      
    }
  }
  
  render() {
    return (
      <ThemeProvider value={this.state}>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={< Dashboard />}/>
            <Route path="/country/:name" element={< DetailPage />}/>
          </Routes>                      
        </main>
      </ThemeProvider>
    );
  }
}

export default App;
