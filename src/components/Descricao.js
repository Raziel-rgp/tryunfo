import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Descricao extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <br />
        Descrição
        <br />
        <textarea
          data-testid="description-input"
          type="text"
          name="description"
          placeholder="digite a descrição"
          onChange={ handleChange }
        />
      </div>
    );
  }
}

Descricao.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
