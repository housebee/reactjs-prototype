import React from "react";

class MyDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("color =  " + this.props.color);
    return (
      <div class="temperature-display-container">
        <div class={`temperature-display ${this.props.color}`}>
          {this.props.value}°C
        </div>
      </div>
    );
  }
}

export default MyDisplay;
