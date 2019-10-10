import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbarmain from "./Navbarmain";
import Footer from "./Footer";

class Cv extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="cv">
          <img
            className="cvdp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT-CfqEPHkRrMbd6MBrtHMD8oly7tuO3GxFZWheZbevvBUbfjL"
          ></img>
          <h4 className="newhead">John Doe]</h4>
          <h4 className="subhead">Wall StNew york, NY, USA</h4>
          <h4 className="subhead">Certificate</h4>
          <h4 className="subhead">Driving license</h4>
          <h4 className="subhead">About</h4>
          <button className="cvbtn">View C.V</button>
        </div>
      </div>
    );
  }
}
export default Cv;
