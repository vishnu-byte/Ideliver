import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { new: "", button: false };
  }
  checked(e) {
    this.setState({ button: !this.state.button });
  }
  verify(e) {
    if (this.state.button == false) {
      this.setState({ position: "/home/" });
      alert("Agree the terms to continue");
    } else {
      this.setState({ position: "/home/profile" });
    }
  }
  alert(e) {
    if (this.state.button == false) {
      alert("hello there");
    }
  }
  render() {
    return (
      <div>
        <div className="signuppage">
          <h1 className="signuphead">Let's get started</h1>
          <div className="firstline">
            <input
              type="text"
              className="inpt"
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
              className="inpt"
              placeholder="Surname"
              onChange={e =>
                this.setState({
                  surname: e.target.value
                })
              }
              value={this.state.surname}
            ></input>
          </div>
          <div className="secondline">
            <input
              type="email"
              className="inpt"
              placeholder="E-mail"
              onChange={e =>
                this.setState({
                  email: e.target.value
                })
              }
              value={this.state.email}
            ></input>
            <input
              type="number"
              className="inpt"
              placeholder="Mobile"
              onChange={e =>
                this.setState({
                  password: e.target.value
                })
              }
              value={this.state.password}
            ></input>
          </div>
          <div className="terms">
            <input
              className="condition"
              type="radio"
              onClick={e => this.checked(e)}
              checked={this.state.button}
            ></input>
            <h4> I agree with terms of use</h4>
            <span class="checkmark"></span>
          </div>

          <div>
            <Link to={this.state.position}>
              <button
                className="btn"
                onClick={e => this.verify()}
                // onClick={e => this.alert()}
              >
                Sign up
              </button>
            </Link>
            <p className="jst">Terms and conditions</p>
          </div>
          <h1>{this.state.display}</h1>
        </div>
      </div>
    );
  }
}
export default Signup;
