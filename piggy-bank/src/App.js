import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/home";
import Diary from "./containers/diary";
import Profile from "./containers/profile";
import Settings from "./containers/settings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../node_modules/react-bootstrap/lib"
import Wrapper from "./components/Wrapper";
import {DailyComponent, WeeklyComponent} from "./components/diary";

const App = () => ( 
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/diary" component={Diary} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/settings" component={Settings} />
      </Wrapper>
      <Footer />
      <DailyComponent/>
      <WeeklyComponent/>
    </div>
  </Router>
);

export default App;
