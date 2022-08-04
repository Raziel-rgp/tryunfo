import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Attr1 extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <br />
        Attr1
        <br />
        <input
          data-testid="attr1-input"
          type="text"
          name="attr1"
          placeholder="digite a attr1"
          onChange={ handleChange }
        />
      </div>
    );
  }
}

Attr1.propTypes = {
  handleChange: PropTypes.func.isRequired,

};
