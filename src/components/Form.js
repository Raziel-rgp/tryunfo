import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
      hasTrunfo,
      filter,
      filterBool,
      cardRareFilter,
      onChangeNameFilter } = this.props;
    return (
      <form className="form" id="formId">
        <label htmlFor="formId">
          Nome da carta
          <br />
          <input
            data-testid="name-input"
            id="name"
            type="text"
            name="cardName"
            value={ cardName }
            placeholder="digite o nome"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="formId">
          <br />
          Descrição
          <br />
          <textarea
            data-testid="description-input"
            type="text"
            name="cardDescription"
            value={ cardDescription }
            placeholder="digite a descrição"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="formId">
          <br />
          Attr1
          <br />
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            placeholder="digite a attr1"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="formId">
          <br />
          Attr2
          <br />
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            placeholder="digite a attr2"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="formId">
          <br />
          Attr3
          <br />
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            placeholder="digite a attr3"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="formId">
          <br />
          Image
          <br />
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            value={ cardImage }
            placeholder="digite o nome"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="formId">
          <br />
          selecione
          <br />
          <select
            value={ cardRare }
            name="cardRare"
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="formId">
          <br />
          Super Trunfo
          { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          /> }
        </label>
        <br />
        <button
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          type="button"
          onClick={ onSaveButtonClick }
        >
          SALVE
        </button>
        <label htmlFor="formId">
          <br />
          Filtro de Busca:
          <br />
          <input
            data-testid="name-filter"
            type="text"
            name="filter"
            value={ filter }
            onChange={ onChangeNameFilter }
          />
        </label>
        <label htmlFor="formId">
          <br />
          selecione
          <br />
          <select
            value={ cardRareFilter }
            name="cardRareFilter"
            onChange={ onChangeNameFilter }
            data-testid="rare-filter"
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="formId">
          <br />
          Super Trunfo
          <input
            type="checkbox"
            name="filterBool"
            data-testid="trunfo-filter"
            checked={ filterBool }
            onChange={ onChangeNameFilter }
          />
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
  onChangeNameFilter: PropTypes.func.isRequired,
  filterBool: PropTypes.bool.isRequired,
  cardRareFilter: PropTypes.string.isRequired,
};
