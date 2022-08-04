import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Attr2 extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <br />
        Attr2
        <br />
        <input
          data-testid="attr2-input"
          type="text"
          name="attr2"
          placeholder="digite a attr2"
          onChange={ handleChange }
        />
      </div>
    );
  }
}

Attr2.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
