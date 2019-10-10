import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbarmain from "./Navbarmain";
import Footer from "./Footer";

class Day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="days">
          <h4 className="dayavail">{this.props.day}</h4>
          <button className="dayedit">Edit</button>
        </div>
        <p className="daytime">{this.props.time}</p>
      </div>
    );
  }
}
export default Day;
