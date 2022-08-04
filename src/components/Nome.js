import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Nome extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        Nome da carta
        <br />
        <input
          data-testid="name-input"
          type="text"
          name="nome"
          placeholder="digite o nome"
          onChange={ handleChange }
        />
      </div>
    );
  }
}

Nome.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
