import React, { Component } from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <button className="popupclose" onClick={this.props.closePopup}>
            X
          </button>
          <div className="popupcontent">
            <h1>Login</h1>
            <input
              type="email"
              className="popupmail"
              placeholder="E-mail"
            ></input>
            <input
              type="password"
              className="popupmail"
              placeholder="Password"
            ></input>
            <button className="popuplogin">Login</button>
            <h5>Forgot password?</h5>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
