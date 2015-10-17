import React, { Component } from 'react';
import axios from 'axios';

import Nav from './Nav';

export default class Demo extends Component {
  constructor () {
    super();
    this.state = {
      fonts: []
    };
  }

  componentDidMount() {
    axios.get('data.json')
    .then((response) => {
      console.log(response);
      this.setState({ fonts: response.data.fonts });
    })
    .catch((response) => {
      if (response instanceof Error) {
        console.log('Error', response.message);
      } else {
        console.log(response);
      }
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.fonts !== nextState.fonts;
  }

  render() {
    return <Nav fonts={this.state.fonts} />;
  }
};
