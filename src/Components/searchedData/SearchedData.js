import React from 'react';

class SearchedData extends React.Component {
  render() {
    console.log('data from searchdata',this.props)
    return(
      <div className="container">
      <h2 className="txt-form">{this.props.txt}</h2>
  <div className="table-responsive">
  <table className="table">

    <tbody>
      <tr>
        <td className="cureData">Ip</td>
        <td className="propData">{this.props.details.initIp}</td>
      </tr>
       <tr>
        <td className="cureData">City</td>
        <td className="propData">{this.props.details.city}</td>
      </tr>
      <tr>
        <td className="cureData">State</td>
        <td className="propData">{this.props.details.state}</td>
      </tr>
       <tr>
        <td className="cureData">Country</td>
        <td className="propData">{this.props.details.country}</td>
      </tr>
      <tr>
        <td className="cureData">Pin code</td>
        <td className="propData">{this.props.details.postal}</td>
      </tr>
       <tr>
        <td className="cureData">org</td>
        <td className="propData">{this.props.details.org}</td>
      </tr>
      <tr>
       <td className="cureData">Location</td>
       <td className="propData">{this.props.details.position}</td>
     </tr>
    </tbody>
  </table>
  </div>
</div>
    );
  }
}

export default SearchedData;
