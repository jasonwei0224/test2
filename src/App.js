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
import SkyV1_ch from "./ch/Sky-ch/sky_v1-ch";
import IAmDifferent_ch from "./ch/IAmDifferent-ch/i_am_different-ch";
import IAmDifferentForm_ch from "./ch/IAmDifferent-ch/i_am_different_form-ch";
import Home_ch from "./ch/Home-ch/home-ch";
import PaulsApple_ch from "./ch/PaulsApple-ch/pauls_apple-ch";
import PeopleAndMask_ch from "./ch/PeopleAndMask-ch/people_and_mask-ch";
import Mirror_ch from "./ch/Mirror-ch/mirror-ch";
import HeaderV1 from "./header_v1.js";
import logo from "./assets/twftorlogo.png";

function App() {
  return (
      <div className="App">
        <HashRouter>
        <img src={logo} id="logo"></img>
        {/* <hr id="mobileLine"/> */}
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
          <Route path="/Sky-ch" component={SkyV1_ch}/>
          <Route path="/IAmDifferent-ch" component={IAmDifferent_ch}/>
          <Route path="/IAmDifferentForm-ch" component={IAmDifferentForm_ch}/>
          <Route path="/Home-ch" component={Home_ch}/>
          <Route path="/PaulsApple-ch" component={PaulsApple_ch}/>
          <Route path="/PeopleAndMask-ch" component={PeopleAndMask_ch}/>
          <Route path="/Mirror-ch" component={Mirror_ch}/>
          <Route path="/-ch" exact component={Home_ch} />
          </HashRouter>
      </div>
  );
}

export default App;