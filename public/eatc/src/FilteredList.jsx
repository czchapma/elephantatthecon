import React, { Component } from 'react';
import List from './List';
import Radio from './Radio';
import './stories.css';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: 'All'
        };
    }

    onAddressChanged = (e) => {
      this.setState({
        header: e.currentTarget.value
      });
    }

    filterItem = (item) => {
      if (this.state.header == "All") {
        return item.header.search(this.state.header) === -1
      }

      else {
        console.log(this.state.header);
        console.log(item.header);
        return item.header.search(this.state.header) !== -1
      }
    }

    render() {

        return (
          <div className = "filterContainer">
            <List items = {this.props.items.filter(this.filterItem)}/>
            <Radio onAddressChanged = {this.onAddressChanged}
                   header = {this.state.header}
                   items = {this.props.items}
                   />
          </div>
        );
    }
}

export default FilteredList;
