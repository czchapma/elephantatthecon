import React, { Component } from 'react';
import List from './List';
import './stories.css';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "all"
        };
    }

    onAddressChanged = (e) => {
      this.setState({
        header: e.currentTarget.value
      });
    }

    // filterItem = (item) => {
    //   if (this.state.header == "All") {
    //     return item.name.toLowerCase().search(this.state.search) != -1
    //   }
    //
    //   else {
    //     return item.name.toLowerCase().search(this.state.search) !== -1
    //     && item.type.search(this.state.type) !== -1
    //   }
    // }
    //
    // filterGeneration = (event) => {
    //   if (event == 1) {
    //     this.setState({type: "All"})
    //   }
    //   if (event == 2) {
    //     this.setState({type: "Eric"})
    //   }
    //   if (event == 3) {
    //     this.setState({type: "Penguin"})
    //   }
    // }
    //
    // sortAndFilter = (item) => {
    //   item = item.filter(this.filterItem);
    //   return item;
    // }

    // <input type="radio" name="site_name"
    //                                    value={result.SITE_NAME}
    //                                    checked={this.state.site === result.SITE_NAME}
    //                                    onChange={this.onSiteChanged} />{result.SITE_NAME}


//           //   <div className = "btn-group" >
          //     <label className="btn">
          //       <input className="checkmark" type="radio" name="radio"
          //              value={result.header}
          //              onChange={this.onAddressChanged}
          //              />
          //       The Positive
          //     </label>
          //     <label className="btn">
          //       <input eventKey = "2" className="checkmark" type="radio" name="radio"/>
          //        Accessibility
          //     </label>
          //     <label className="btn">
          //       <input eventKey = "3" className="checkmark" type="radio" name="radio"/>
          //       Trans + Nonbinary Inclusion
          //     </label>
          //     <label className="btn">
          //       <input eventKey = "4" className="checkmark" type="radio" name="radio"/>
          //       Photography
          //     </label>
          //   </div>

    render() {
      console.log('helo');
      console.log(this.props);
        return (
          <div className = "filterContainer">
            <List items = {this.props.items}/>

          </div>
        );
    }
}

export default FilteredList;
