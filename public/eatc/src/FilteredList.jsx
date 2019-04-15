import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "all"
        };
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

    render() {
        return (
          <div className = "filterContainer">
            <List items = {this.props.items}/>
            <div className = "filters">
            </div>
          </div>
        );
    }
}

export default FilteredList;
