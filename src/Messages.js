import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbarmain from "./Navbarmain";
import Footer from "./Footer";
import Messaggesbackup from "./Messagesbackup";

class Messages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="totalmessage">
          <div className="message">
            <div className="msgmainbtns">
              <button className="allmsgbtn">All messages</button>
              <div className="msgnumber">
                <button className="msg-onebtn">1</button>
                <button className="msg-btn">2</button>
                <button className="msg-btn">3</button>
                <button className="msg-btn">></button>
              </div>
            </div>
          </div>
          <Messaggesbackup
            msgimage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0HF7VtUBuiVr9EHIlvQp6Jq49PBC0hdcb3K0xCFuGkZy1nlVu"
            msgpara="I need to make an urgent delivery. Can you come over?"
          />
          <Messaggesbackup
            msgimage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0HF7VtUBuiVr9EHIlvQp6Jq49PBC0hdcb3K0xCFuGkZy1nlVu"
            msgpara="I need to make an urgent delivery. Can you come over?"
          />
          <Messaggesbackup
            msgimage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0HF7VtUBuiVr9EHIlvQp6Jq49PBC0hdcb3K0xCFuGkZy1nlVu"
            msgpara="I need to make an urgent delivery. Can you come over?"
          />
          <Messaggesbackup
            msgimage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0HF7VtUBuiVr9EHIlvQp6Jq49PBC0hdcb3K0xCFuGkZy1nlVu"
            msgpara="I need to make an urgent delivery. Can you come over?"
          />
        </div>
      </div>
    );
  }
}
export default Messages;
