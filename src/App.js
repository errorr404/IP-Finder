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
  componentWillMount() {
    console.log('in app.js componentWillMount');
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
     })
   });



 }


  render() {
  console.log('in render function app.js');
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
