import React, { Component } from "react";

class Quickshift extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="popupcontentone">
            <h1>Quick shift</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
            <button className="popupcloseone" onClick={this.props.closePopup}>
              Accept
            </button>

            <h4>Know more</h4>
          </div>
        </div>
      </div>
    );
  }
}
export default Quickshift;
