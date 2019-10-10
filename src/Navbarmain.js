import React, { Component } from "react";
import { Link } from "react-router-dom";
import Quickshift from "./Quickshift";

class Navbarmain extends Component {
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
        <div className="newnav">
          <div className="newnavhead">
            <h3 className="newhead">MyDeliverer</h3>
          </div>
          <div className="newnavbtn">
            <button className="newnavbtns">EN</button>
            <button
              className="newnavbtns"
              onClick={this.togglePopup.bind(this)}
            >
              Quick shift
            </button>
            <Link to="/home/profile/cv/restuarant/">
              <button className="newnavbtns">Find restaurant</button>
            </Link>
            <Link to="/home/profile/cv/calender">
              <button className="newnavbtns">Availability</button>
            </Link>
            <div class="dropdown">
              <button class="dropbtn">Jean Roc</button>
              <div class="dropdown-content">
                <button className="drpdwn">Edit profile</button>
                <Link to="/home/profile/cv/inbox">
                  <button className="drpdwn">Inbox</button>
                </Link>
                <Link to="/">
                  <button className="drpdwn">Log out</button>
                </Link>
              </div>
            </div>
            <img
              src="data:image/jpeg;base64,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"
              className="smalldp"
            ></img>
          </div>
        </div>
        {this.state.showPopup ? (
          <Quickshift closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}
export default Navbarmain;
