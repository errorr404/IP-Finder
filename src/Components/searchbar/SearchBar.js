import React from 'react';
import SearchedData from '../searchedData/SearchedData';
import SimpleMap from '../map/Map';
import axios from 'axios';
import $ from "jquery";

class SearchBars extends React.Component {
  constructor(props){
    super(props);
    this.getDetails = this.getDetails.bind(this);
    console.log('data from const',this.props);
    this.state= {
      initIp: this.props.initIP,
      country:'',
      city:'',
      state:'',
      org:'',
      postal:'',
      position:'',
      val:false
    }
  }

  getDetails = (e) => {
    e.preventDefault();
   console.log(e.target.elements.searchip.value);
  //  console.log(this.props.city);
    var inputIp=e.target.elements.searchip.value;
  //  console.log(typeof inputIp);
    var that = this;
    var initIP;
  $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
  //  this.setState({ip: data.geobytesipaddresss});
     console.log(data.geobytesremoteip);
     initIP = data.geobytesremoteip;
     console.log('initip',initIP);
     var th = that;
     axios.get(`https://ipinfo.io/${inputIp}/json?token=a14c7171f186a6`)
     .then(res => {
       th.setState({
         initIp:inputIp,
         country:res.data.country,
         city:res.data.city,
         state:res.data.region,
         org:res.data.org,
         postal:res.data.postal,
         position:res.data.loc,
         val:true
       });
  //console.log('in comonentdimount state inner',th.state);
     })
     .catch(err =>alert('Enter a valid IP address'));
    // console.log('now we call the searchdata',tha.state);
     //return   <SearchedData  details={this.state}/>;
  });

};

  render() {
    console.log('state from searchbar',this.state);
    var value = this.state.val;
    console.log('value',value);
    //console.log('data from here',this.props);
  return(
    <div className="form-setup">
    <form className="form-inline mr-auto" onSubmit={this.getDetails}>
    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" name="searchip"/>
    <button type="submit" className="btn btn-success">Search</button>
    </form>
    {value ? (
      <div>
       <SearchedData details={this.state} txt="Your Searched IP details"/>
       <SimpleMap location={this.state.position} />
       </div>
     ) : (
       <div>
       <SearchedData details={this.props} txt="Your Current IP details"/>
       <SimpleMap location={this.props.position}/>
       </div>
     )}
    </div>
 );
}
}

export default SearchBars;
