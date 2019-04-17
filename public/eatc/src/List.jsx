import React, { Component } from 'react';
import './stories.css';

function renderList(it) {
    const items = it.map(item => {
      let quote = '"' + item.quote + '"'
      return <div key={item.id}>
          <div className = "card">
            <div className = "title">
              <h4><b>{String.prototype.toUpperCase.call(item.header)}</b></h4>
            </div>
            <div className = "content">
              <p>{quote}</p>
            </div>
        </div>
      </div>
    });

    return items;
}

class List extends Component {
  render() {
    return (
      <div className = "storiesContainer">
        {renderList(this.props.items)}
      </div>
    );
  }
}

export default List;
