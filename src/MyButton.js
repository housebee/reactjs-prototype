import React from 'react';

class MyButton extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <button onClick={this.props.clickHandler}>{this.props.label}</button>
    )
  }
}

export default MyButton;