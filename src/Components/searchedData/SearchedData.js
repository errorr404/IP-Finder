import React from 'react';

class SearchedData extends React.Component {
  render() {
    return(
      <div className="container">
      <h2>Your search reslt</h2>
  <div className="table-responsive">
  <table className="table">

    <tbody>
      <tr>
        <td>Ip</td>
        <td>192.198.0.1</td>
      </tr>
       <tr>
        <td>country</td>
        <td>India</td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
    );
  }
}

export default SearchedData;
