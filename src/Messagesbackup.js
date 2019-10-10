import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbarmain from "./Navbarmain";
import Footer from "./Footer";

class Messagesbackup extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="msgmain">
          <div className="msgone">
            <img className="msgdp" src={this.props.msgimage}></img>
            <h4 className="msgpara">Jean Roc</h4>
          </div>
          <div className="msgonetwo">
            <h4 className="msgpara">{this.props.msgpara}</h4>
          </div>
          <div className="msgone">
            <button className="msgbtnone">Accept</button>
            <button className="msgbtntwo">Reject</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Messagesbackup;
