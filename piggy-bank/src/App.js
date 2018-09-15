import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/home";
import Diary from "./containers/diary";
import Profile from "./containers/profile";
import Settings from "./containers/settings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Calendar from "./components/diary/monthly"


const App = () => (
  <Router>

    <div style={{ height: '100vh', margin: '0 auto', background: 'linear-gradient(180deg, #EAF7F2 0%, #EAF7F2 31.49%, #B7F0D9 56.35%, #7BE8BC 70.17%, #4DE2A6 84.53%, #0EDA87 100%)' }}>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/diary" component={Diary} />


      </Wrapper>
      <Footer />
    </div>

  </Router>
);

export default App;
