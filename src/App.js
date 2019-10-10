import React, { Component } from "react";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./Home";
import Signup from "./Signup";
import Profile from "./Profile";
import Cv from "./Cv";
import Restuarant from "./Restuarant";
import Calender from "./Calender";
import Inbox from "./Inbox";
import Messages from "./Messages";
import Companylogin from "./Companylogin";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbarmain from "./Navbarmain";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedin: false
    };
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          {this.state.isLoggedin ? <Navbarmain /> : <Navbar />}

          <Switch>
            <Route exact path="/companyprofile" component={Companylogin} />
            <Route exact path="/home/profile/cv/message" component={Messages} />
            <Route exact path="/home/profile/cv/inbox" component={Inbox} />
            <Route
              exact
              path="/home/profile/cv/calender"
              component={Calender}
            />

            <Route
              exact
              path="/home/profile/cv/restuarant"
              component={Restuarant}
            />
            <Route exact path="/home/profile/cv" component={Cv} />
            <Route exact path="/home/profile" component={Profile} />
            <Route exact path="/home" component={Signup} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
