import React from 'react';
import SearchedData from '../searchedData/SearchedData';


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
      position:''
    }
  }
  getDetails = (e) => {
    e.preventDefault();
    console.log(e.target.elements.searchip.value);
  }

  render() {
    //console.log('data from searchbar',this.state);
    console.log('data from here',this.props);
  return(
    <div>
    <form className="form-inline mr-auto" onSubmit={this.getDetails}>
    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" name="searchip"/>
    <button type="submit" className="btn btn-success">Search</button>
    </form>
    <SearchedData  />
    </div>
 );
}
}

export default SearchBars;
