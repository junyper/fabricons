import React, { Component } from 'react';
import axios from 'axios';

import styles from './Demo.css'

export default class Demo extends Component {
  constructor () {
    super();
    this.state = {
      formats: [],
      currentDemo: {
        path: null
      }
    };
  }

  componentDidMount() {
    axios.get('data.json')
    .then((response) => {
      this.setState({ formats: response.data.formats });
    })
    .catch((response) => {
      if (response instanceof Error) {
        console.log('Error', response.message);
      } else {
        console.log(response);
      }
    });
  }

  defaultDemo() {
    var firstFormat = this.state.formats[0];
    var firstDemo = (firstFormat) ? firstFormat.demos[0] : null;

    return (firstDemo) ? firstDemo.path : '';
  }

  setCurrentDemo(event, demo) {
    this.setState({ currentDemo: demo });
    event.preventDefault();
  }

  renderFormat(format) {
    return (
      <div key={format.name} className={styles.demoLinkListContainer}>
        <span className={styles.demoLinkFormat}>
          {format.name}:
        </span>
        <ul className={styles.demoLinkList}>
          {
            format.demos.map(demo =>
              <li key={demo.name} className={styles.demoLinkContainer}>
                <a href={demo.path} className={styles.demoLink} onClick={event => this.setCurrentDemo(event, demo)}>
                  {demo.name}
                </a>
              </li>
            )
          }
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.root}>
        <nav className={styles.demoNav}>
          { this.state.formats.map(format => this.renderFormat(format)) }
        </nav>
        <iframe src={this.state.currentDemo.path || this.defaultDemo()} className={styles.demo}></iframe>
      </div>
    );
  }
};
