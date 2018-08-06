import React from 'react';

class FloatingIp extends React.Component {
  render() {
    console.log()
    return(
      <div>

      <marquee behavior="scroll" direction="left">your current ip ----${this.props.initIp}</marquee>

      </div>
    );
  }
}

export default FloatingIp;
