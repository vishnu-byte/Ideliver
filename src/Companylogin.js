import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cv from "./Cv";

class Companylogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonthree: false,
      name: ""
    };
  }

  checkedagree(e) {
    this.setState({ buttonthree: !this.state.buttonthree });
  }
  verify(e) {
    if (this.state.buttonthree == false) {
      this.setState({ position: "/home/profile" });
      alert("Failed\nYou need to agree the terms to continue");
    } else {
      this.setState({ position: "/home/profile/cv" });
      // this.setState({ hey: this.state.name });
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="profile">
          <h1 className="prohead">Complete profile</h1>
          <h3>Contact person info</h3>
          <div className="profirst">
            <input
              type="text"
              className="profilefill"
              placeholder="Name"
            ></input>
            <input
              type="text"
              className="profilefill"
              placeholder="Surname"
            ></input>
          </div>

          <div className="profirst">
            <input
              type="mail"
              className="profilefill"
              placeholder="E-mail"
            ></input>
            <input
              type="number"
              className="profilefill"
              placeholder="Mobile"
            ></input>
          </div>
          <h3>Company info</h3>
          <div className="profirst">
            <input
              type="text"
              className="profilefill"
              placeholder="Name"
            ></input>
            <input
              type="text"
              className="profilefill"
              placeholder="Street"
            ></input>
          </div>
          <div className="profirst">
            <input
              type="text"
              className="profilefill"
              placeholder="Post code+ City"
            ></input>
            <input
              type="text"
              className="profilefill"
              placeholder="Country"
            ></input>
          </div>
          <div className="profirst">
            <input
              type="text"
              className="profilefill"
              placeholder="Email"
            ></input>
            <input
              type="text"
              className="profilefill"
              placeholder="Mobile"
            ></input>
          </div>
          <div className="profirst">
            <input
              type="text"
              className="profilefill"
              placeholder="KBK"
            ></input>
            <input
              type="text"
              className="profilefill"
              placeholder="IBAN"
            ></input>
          </div>
          <div className="upload">
            <div className="upfrst">
              <p className="uptext"> ID or passport</p>
              <button className="upbtn">Upload</button>
            </div>
            <div className="upfrst">
              <p className="uptext">Company logo</p>
              <button className="upbtn">Upload</button>
            </div>
          </div>
          <div className="iagree">
            <input
              className="agreebtn"
              type="radio"
              onClick={e => this.checkedagree(e)}
              checked={this.state.buttonthree}
            ></input>
            <p className="agreetext">I agree with terms of use</p>
          </div>
          <button className="prolstbtn" onClick={e => this.verify()}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}
export default Companylogin;
