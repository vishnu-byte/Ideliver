import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="home">
          <div className="firsthome">
            <h1>Deliver.Earn.</h1>
            <h3>Delivering with us means:</h3>
            <ul>
              <li>A good pay</li>
              <li>Flexible working hours</li>
              <li>The chance to approach employees by yourself</li>
            </ul>
            <Link to="/home">
              <button className="frsthmbtn">Become a deliverer</button>
            </Link>
          </div>
          <div className="secondhome">
            <h1>Hassle-free delivery.</h1>
            <h3>Working with us means:</h3>
            <ul>
              <li>Having acces to large pool of deliverers nearby you.</li>
              <li>
                We take care of all the paperworks of the workers sent by us.
              </li>
              <li>
                Need a deliverer within an hour?No problem. We have deliverers
                on standby to reach you in maximum an hour
              </li>
            </ul>
            <Link to="/companyprofile">
              <button className="scndhmbtn">Register your account</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
