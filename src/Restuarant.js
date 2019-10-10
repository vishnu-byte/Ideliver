import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbarmain from "./Navbarmain";
import Footer from "./Footer";

class Restuarant extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="rest">
          <div className="restfirst">
            <img
              className="restimage"
              src="https://jooinn.com/images/brewed-coffee-icon-indicates-restaurant-roasted-and-cafe.jpg"
            ></img>
            <h1>Jean's Restuarant</h1>
          </div>
          <div className="restsec">
            <p>Location:Wall StNew York,NY,USA</p>
            <p>post code</p>
          </div>
          <div className="restdetail">
            <h4 className="restdetailabout">About us</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Restuarant;
