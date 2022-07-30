import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.olaClick = this.olaClick.bind(this)
  }
  olaClick() {
    console.log('Funfo')
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <button onClick={this.olaClick}>Olá</button>
      </div>
    );
  }
}

export default App;
