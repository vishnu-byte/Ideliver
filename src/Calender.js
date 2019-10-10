import React, { Component } from "react";
import { Link } from "react-router-dom";
import Day from "./Day";
import Navbarmain from "./Navbarmain";
import Footer from "./Footer";
class Calender extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const arr = [
      { day: "Monday", time: "15:00-18:00" },
      { day: "Monday", time: "Full day" },
      { day: "Monday", time: "15:00-18:00" }
    ];
    const arrtwo = [
      { day: "Monday", time: "15:00-18:00" },
      { day: "Monday", time: "15:00-18:00" },
      { day: "Monday", time: "15:00-18:00" }
    ];
    const arrthree = [{ day: "Monday", time: "15:00-18:00" }];
    return (
      <div>
        <div className="dayscalender">
          <div className="calender">
            {arr.map(item => (
              <Day day={item.day} time={item.time} />
            ))}
          </div>
          <div className="caltwo">
            {arrtwo.map(item => (
              <Day day={item.day} time={item.time} />
            ))}
          </div>
          <div className="calthree">
            {arrthree.map(item => (
              <Day day={item.day} time={item.time} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Calender;
