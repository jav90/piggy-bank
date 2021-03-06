//react , react router dom 
import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
//Containers
import Home from "./containers/home";
import Diary from "./containers/diary";
import Add from "./containers/add";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
// import "./components/diary/assets/style.css";
import login from "./containers/login";
import Profile from "./containers/profile";
import RegisterNew from "./containers/RegisterNew";
import Budget from "./containers/budget";
import Tips from "./containers/tips";
//css
import "./index.css";




const Ruteador=()=>{
   return (
    <div >
      <NavBar />
      <div className="prueba">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/diary" component={Diary} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/budget" component={Budget} />
        <Route exact path="/tips" component={Tips} />
      </Switch>
      </div>
      <Footer/>
    </div>
  )}


const App = () => (
<Router>
  <Switch>
    <Route exact path="/login" component={login} />
    <Route exact path="/newuser" component={RegisterNew} />
    <Route path="/" component={Ruteador}/>
  </Switch>
</Router>

);

export default App;
