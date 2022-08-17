import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

let nameFil = 'todas';
let boolFil = false;

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
    hasTrunfo: false,
    filter: '',
    cardRareFilter: '',
    filterBool: false,
    allCard: 'todas',
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const { cardName, cardDescription,
        cardAttr1, cardAttr2, cardAttr3,
        cardImage, cardRare,
      } = this.state;
      const limitAttr1 = 90;
      const limitAttr2 = 90;
      const limitAttr3 = 90;
      const somAttrs = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const limitAttr = 210;
      const condButton1 = cardName.length > 0
        && cardDescription.length > 0
        && cardImage.length > 0
        && cardRare.length > 0
        && cardAttr1.length > 0
        && cardAttr2.length > 0
        && cardAttr3.length > 0
        && cardAttr1 >= 0
        && cardAttr2 >= 0
        && cardAttr3 >= 0;
      const condButton2 = cardAttr1 <= limitAttr1
        && cardAttr2 <= limitAttr2
        && cardAttr3 <= limitAttr3;
      const condButton3 = somAttrs <= limitAttr;
      const condButtonComp = condButton1 && condButton2 && condButton3;
      if (condButtonComp) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  }

  // ajuda do Luiz

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, savedCards, allCard,
    } = this.state;
    const nomeAleatorio = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      allCard,
    };
    let varHasTobeTrue = false;
    if (cardTrunfo) {
      varHasTobeTrue = true;
    }
    if (savedCards.length > 0) {
      const elemento = savedCards.find((element) => element.cardTrunfo === true);
      if (elemento) {
        varHasTobeTrue = true;
      }
    }
    const cardSaved = savedCards;
    cardSaved.push(nomeAleatorio);
    this.setState({
      savedCards: cardSaved,
    }, () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: '',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
        hasTrunfo: varHasTobeTrue,
      });
    });
  }

  deleteButton = (key) => {
    const { savedCards } = this.state;
    const trunfTrue = savedCards[key];
    if (trunfTrue.cardTrunfo === true) {
      this.setState({ hasTrunfo: false });
    }
    savedCards.splice(key, 1);
    this.setState({ savedCards });
  }

  onChangeNameFilter = (event) => {
    const { value, checked } = event.target;
    this.onInputChange(event);
    nameFil = value;
    boolFil = checked;
    this.forceUpdate();
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      savedCards,
      hasTrunfo,
      filter,
      cardRareFilter,
      filterBool } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          hasTrunfo={ hasTrunfo }
          filter={ filter }
          onChangeNameFilter={ this.onChangeNameFilter }
          filterBool={ filterBool }
          cardRareFilter={ cardRareFilter }
        />
        <Card { ...this.state } onInputChange={ this.onInputChange } />
        { savedCards
          .filter((carta) => (!nameFil || carta.cardName.includes(nameFil)
          || carta.cardRare === nameFil || carta.allCard === nameFil)
          && (!boolFil || carta.cardTrunfo))
          .map((carta, index) => (
            <div key={ index } id={ index }>
              <Card
                key={ index }
                cardName={ carta.cardName }
                cardDescription={ carta.cardDescription }
                cardAttr1={ carta.cardAttr1 }
                cardAttr2={ carta.cardAttr2 }
                cardAttr3={ carta.cardAttr3 }
                cardImage={ carta.cardImage }
                cardRare={ carta.cardRare }
                cardTrunfo={ carta.cardTrunfo }
                allCard={ carta.allCard }
              />
              <button
                data-testid="delete-button"
                type="button"
                onClick={ () => this.deleteButton(index) }
              >
                Excluir
              </button>
            </div>
          )) }
      </div>
    );
  }
}

export default App;
