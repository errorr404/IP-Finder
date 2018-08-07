import React, { Component } from 'react';
import './App.css';
import Header from './Components/header/Header';
import FloatingIp from './Components/floatingIp/FloatingIp';
import Paragraph from './Components/paragraph/Paragraph';
import SearchBars from './Components/searchbar/SearchBar';


import axios from 'axios';
import $ from "jquery";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends Component {
  constructor() {
    super();

    console.log('in app.js');
    this.state= {
      initIp: '',
      country:'',
      city:'',
      state:'',
      org:'',
      postal:'',
      position:''
    }
  }
//   componentWillMount() {
//     console.log('in app.js componentWillMount');
//     var that = this;
//     var initIP;
//   $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
//   //  this.setState({ip: data.geobytesipaddresss});
//      console.log(data.geobytesremoteip);
//      initIP = data.geobytesremoteip;
//      console.log('initip',initIP);
//      var th = that;
//      axios.get(`https://ipinfo.io/${initIP}/json?token=a14c7171f186a6`)
//      .then(res => {
//        th.setState({
//          initIp:initIP,
//          country:res.data.country,
//          city:res.data.city,
//          state:res.data.region,
//          org:res.data.org,
//          postal:res.data.postal,
//          position:res.data.loc
//        });
// console.log('in comonent will mount state inner',th.state);
//      })
//
//
//    } );
//
//    // this.setState({
//    //   initIp: '1',
//    //   country:'2',
//    //   city:'3',
//    //   state:'4',
//    //   org:'5',
//    //   postal:'6',
//    //   position:'7'
//    // });
//    console.log('in comonent will mount state',this.state);
//  }

 UpdateList() {
   var that = this;
   var initIP;
 $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
 //  this.setState({ip: data.geobytesipaddresss});
    console.log(data.geobytesremoteip);
    initIP = data.geobytesremoteip;
    console.log('initip',initIP);
    var th = that;
    axios.get(`https://ipinfo.io/${initIP}/json?token=a14c7171f186a6`)
    .then(res => {
      th.setState({
        initIp:initIP,
        country:res.data.country,
        city:res.data.city,
        state:res.data.region,
        org:res.data.org,
        postal:res.data.postal,
        position:res.data.loc
      });
 console.log('in comonentdimount state inner',th.state);
})
.catch(err =>alert('Connect Your computer to internet'));


  } );
 }
    componentDidMount() {
      this.UpdateList();
    }

  render() {
  console.log('in render function app.js---',this.state);
    return (
      <MuiThemeProvider>
      <div>
      <Header />
      <FloatingIp initIp={this.state.initIp} />
      <Paragraph/>
      <SearchBars {...this.state}/>


      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
