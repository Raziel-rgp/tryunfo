import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    return (
      <div>
        <br />
        <select data-testid="rare-input">
          <option value="normal">normal</option>
          <option defaultValue="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </div>
    );
  }
}
