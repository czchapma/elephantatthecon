import React, { Component } from 'react';
import './stories.css'
// import FilteredList from './FilteredList';

class Radio extends Component {
  renderList(it, head, change) {

      const items = it.map(item => {
        return <div key= {item}>
        <input type="radio" className="headerButton" name = "header"
                                   value={item}
                                   defaultChecked={head === item}
                                   onChange={change}
                                   /> {item}
      </div>
      });

      return items;
  }

  allHeaders(it) {
    let headers = it.map(function (el) { return el.header; });
    // let headerArray = Array.from(headers).push("All");
    headers.unshift("All");
    return Array.from(new Set(headers))
  }

  render() {
    return (
      <div className = "btn-group">
        {this.renderList(this.allHeaders(this.props.items), this.props.header, this.props.onAddressChanged)}
      </div>
    );
  }
}

export default Radio;
