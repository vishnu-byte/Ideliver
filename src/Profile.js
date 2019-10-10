import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cv from "./Cv";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hey: "",
      new: "",
      button: true,
      buttontwo: false,
      buttonthree: false,
      name: ""
    };
  }
  checked(e) {
    this.setState({ button: !this.state.button });
  }
  checkedfe(e) {
    this.setState({ buttontwo: !this.state.buttontwo });
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
        <div className="profile">
          <h1 className="prohead">Complete profile</h1>
          <div className="profirst">
            <input
              type="text"
              className="profilefill"
              placeholder="Name"
              onChange={e =>
                this.setState({
                  name: e.target.value
                })
              }
              value={this.state.name}
            ></input>
            <input
              type="text"
              className="profilefill"
              placeholder="Surname"
            ></input>
          </div>
          <div className="gender">
            <p>Gender: </p>
            <p>Male</p>
            <input
              className="conditioned"
              type="radio"
              onClick={e => this.checked(e)}
              checked={this.state.button}
            ></input>
            <p>Female</p>
            <input
              className="conditioned"
              type="radio"
              onClick={e => this.checkedfe(e)}
              checked={this.state.buttontwo}
            ></input>
            <p>DOB</p>
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
            <input
              type="text"
              placeholder="Address"
              className="proaddress"
            ></input>
            <input
              type="text"
              className="profilefill"
              placeholder="Post Code"
            ></input>
            <input
              type="number"
              className="profilefill"
              placeholder="City"
            ></input>
          </div>
          <div className="upload">
            <div className="upfrst">
              <p className="uptext">Upload your ID card passport(Both sides)</p>
              <button className="upbtn">Upload</button>
            </div>
            <div className="upfrst">
              <p className="uptext">Upload your C.V</p>
              <button className="upbtn">Upload</button>
            </div>
            <div className="upfrst">
              <p className="uptext">Upload your picture</p>
              <button className="upbtn">Upload</button>
            </div>
            <input
              type="text"
              placeholder="About yourself(describe your hobbies,school and interests)"
              className="hobbies"
            ></input>
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
          <Link to={this.state.position}>
            <button className="prolstbtn" onClick={e => this.verify()}>
              Continue to your profile
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Profile;
