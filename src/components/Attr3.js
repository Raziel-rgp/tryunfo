import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Attr3 extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <br />
        Attr3
        <br />
        <input
          data-testid="attr3-input"
          type="text"
          name="attr3"
          placeholder="digite a attr3"
          onChange={ handleChange }
        />
      </div>
    );
  }
}

Attr3.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
