import React from "react";
import "./App.css";
import Navigation from "./navigation";
import PaulsApple from "./pauls_apple";
import Home from "./home";
import IAmDifferent from "./IAmDifferent/i_am_different";
import PeopleAndMask from "./people_and_mask";
import OtherSideOfMask from "./other_side_of_mask";
import Mirror from "./mirror";
import Sky from "./sky";
import IAmDifferentForm from "./i_am_different_form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Header from "./header";
import SkyV1 from "./sky_v1";
import HeaderV1 from "./header_v1.js";
import logo from "./assets/twftorlogo.png";

function App() {
  return (
      <div className="App">
        <HashRouter>
        <img src={logo} id="logo"></img>
        <HeaderV1 />
          <Route path="/" exact component={Home} />
          <Route path="/PaulsApple" component={PaulsApple} />
          <Route path="/IAmDifferent" component={IAmDifferent} />
          <Route path="/PeopleAndMask" component={PeopleAndMask} />
          <Route path="/OtherSideOfMask" component={OtherSideOfMask} />
          <Route path="/Mirror" component={Mirror} />
          <Route path="/SkyV2" component={Sky} />
          <Route path="/IAmDifferentForm" component={IAmDifferentForm}/>
          <Route path="/Sky" component={SkyV1}/>

          </HashRouter>
      </div>
  );
}

export default App;
