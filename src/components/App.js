/* eslint-disable array-callback-return */
import React, { Component } from 'react';

import './App.css';

// import config from '../config/config.json';

import Form from './form';
import CardInfo from './card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name:'',
      last_name:'',
      email: '',
      phone_number: '',
      street_address: '',
      post_code:'',
      selectedOption: '',
      styleCard: 'none'
    };
  };

  cardInfo = () => {
    // console.log(this.state);
    this.setState({
      styleCard:'block'
    })

  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
  }

  onChangeInput = (value, name) => {
    this.setState({
      [name]:value
    });
  };

  render() {
    const  inputs  = this.state;
    const { selectedOption, styleCard } = this.state
    return (
      <div className='App'>
        <Form
          inputs={inputs}
          valueSelect={selectedOption}
          cardInfo={this.cardInfo}
          onChangeI={this.onChangeInput}
          onChangeS={this.handleChange}
        />
        <CardInfo
          style={styleCard}
          infoState={inputs}
        />
      </div>
    );
  }
}

export default App;
