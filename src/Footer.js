import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <div className="dev">
          <h5>Developed by SaveDevs. All rights received</h5>
        </div>
        <div className="footerend">
          <button className="footerbtn">Privacy</button>
          <button className="footerbtn">Terms</button>
          <button className="footerbtn">About</button>
          <button className="footerbtn">Contact</button>
        </div>
      </div>
    );
  }
}
export default Footer;
