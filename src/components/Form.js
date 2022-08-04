import React, { Component } from 'react';
import Nome from './Nome';
import Descricao from './Descricao';
import Attr1 from './Attr1';
import Attr2 from './Attr2';
import Attr3 from './Attr3';
import Select from './Select';
import Image from './Image';

export default class Form extends Component {
    state = {
      nome: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      select: '',
      // trunfo: false,
    }

    handleChange = ({ target }) => {
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        [name]: value,
      });
    }

    buttonFunc = () => {
      console.log('funfo');
    }

    render() {
      const { handleChange, buttonFunc } = this;
      const {
        nome,
        description,
        attr1,
        attr2,
        attr3,
        select,
        image } = this.state;
      return (
        <div>
          <form className="form">
            <Nome nome={ nome } handleChange={ handleChange } />
            <Descricao description={ description } handleChange={ handleChange } />
            <Attr1 attr1={ attr1 } handleChange={ handleChange } />
            <Attr2 attr2={ attr2 } handleChange={ handleChange } />
            <Attr3 attr3={ attr3 } handleChange={ handleChange } />
            <Image image={ image } handleChange={ handleChange } />
            <Select select={ select } />
            <input type="checkbox" data-testid="trunfo-input" />
            <br />
            <br />
            <button
              data-testid="save-button"
              onClick={ buttonFunc }
              type="button"
            >
              SALVE
            </button>
          </form>
        </div>
      );
    }
}
