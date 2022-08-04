import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <br />
        Image
        <br />
        <input
          data-testid="image-input"
          type="text"
          name="image"
          placeholder="digite o nome"
          onChange={ handleChange }
        />
      </div>
    );
  }
}
Image.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
