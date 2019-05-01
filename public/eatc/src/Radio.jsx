import React, { Component } from 'react';
import './stories.scss'
// import FilteredList from './FilteredList';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

class Radio extends Component {
  renderList(it, head, change) {

      const items = it.map(item => {
        return <div key= {item} onClick={this.toggleCheck}>
        <input type="radio" name = "header"
                            value={item}
                            checked={head === item}/>
                            <span value={item} onClick={change}><div className="check"/></span> {item}
      </div>
      });

      return items;
  }

  allHeaders(it) {
    let headers = it.map(function (el) { return el.header; });
    console.log(headers);
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
