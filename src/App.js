import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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

  onClickSaveButton = (event) => {
    event.preventDefault();
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, savedCards,
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
    };
    let varHasTobeTrue = false;
    if (cardTrunfo) {
      varHasTobeTrue = true;
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
      savedCards } = this.state;
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
          onClickSaveButton={ this.onClickSaveButton }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card { ...this.state } onInputChange={ this.onInputChange } />
        { savedCards.map((carta, index) => (<Card
          key={ index }
          cardName={ carta.cardName }
          cardDescription={ carta.cardDescription }
          cardAttr1={ carta.cardAttr1 }
          cardAttr2={ carta.cardAttr2 }
          cardAttr3={ carta.cardAttr3 }
          cardImage={ carta.cardImage }
          cardRare={ carta.cardRare }
          cardTrunfo={ carta.cardTrunfo }
        />)) }
      </div>
    );
  }
}

export default App;
