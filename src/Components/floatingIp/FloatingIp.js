import React from 'react';

class FloatingIp extends React.Component {
  render() {
    console.log()
    return(
      <div className="floating-text">

      <marquee behavior="scroll" direction="left"><h2>your current ip ----{this.props.initIp}</h2></marquee>

      </div>
    );
  }
}

export default FloatingIp;
