import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import "../src/assets/css/main.scss"
import Home from "./Components/home";


const routing = (
  <Router>
      <Route path="/" component={Home} exact/>
  </Router>
)

ReactDOM.render(routing, document.getElementById("index"));