import React, { Component } from "react";
import Login from "./Login";
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="brand">
            <h3 className="head">MyDeliverer</h3>
          </div>

          <div className="navbarend">
            <p className="about">About us</p>
            <button onClick={this.togglePopup.bind(this)} className="login">
              Login
            </button>
          </div>
        </div>
        {this.state.showPopup ? (
          <Login closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}
export default Navbar;
