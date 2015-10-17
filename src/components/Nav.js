import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
        {
          this.props.fonts.map(font =>
            <li key={font.name}>
              <a href={font.path} target="_blank">
                {font.name}
              </a>
            </li>
          )
        }
        </ul>
      </nav>
    );
  }
};

Nav.propTypes = {
  fonts: React.PropTypes.array.isRequired
};

Nav.defaultProps = {
  fonts: []
};
