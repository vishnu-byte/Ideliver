import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbarmain from "./Navbarmain";

class Inbox extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="inboxtotal">
          <div className="inbxfrst">
            <div className="inbxprsnl">
              <img
                className="inbxdp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT-CfqEPHkRrMbd6MBrtHMD8oly7tuO3GxFZWheZbevvBUbfjL"
              ></img>
              <h2 className="inbxname">John Doe</h2>
              <button className="inbxbtn">View profile</button>
            </div>
            <div className="inbxrqst">
              <Link to="/home/profile/cv/message">
                <button className="inbxaccpt">Accept request</button>
              </Link>
              <button className="inbxrjct">Reject request</button>
            </div>
          </div>
          <div className="inbxscnd">
            <h1>Message box</h1>
            <div className="msgbox">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0HF7VtUBuiVr9EHIlvQp6Jq49PBC0hdcb3K0xCFuGkZy1nlVu"
                className="msgdp"
              ></img>
              <h5 className="smallmsg">Hello</h5>
            </div>
            <div className="msgboxa">
              <h5 className="smallmsg">Hi there.</h5>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFjKZEFnLDUyZPwwmbJM1WMgUNezD7FLKMGfpHS2Agyag4rZlt"
                className="msgdp"
              ></img>
            </div>
            <div className="msgbox">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0HF7VtUBuiVr9EHIlvQp6Jq49PBC0hdcb3K0xCFuGkZy1nlVu"
                className="msgdp"
              ></img>
              <h5 className="smallmsg">How may I help you?</h5>
            </div>
            <div className="msgboxa">
              <h5 className="smallmsg">I need to make an urgent delivery.</h5>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFjKZEFnLDUyZPwwmbJM1WMgUNezD7FLKMGfpHS2Agyag4rZlt"
                className="msgdp"
              ></img>
            </div>
            <input
              type="text"
              placeholder="Type your message here"
              className="inbxinpt"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
export default Inbox;
