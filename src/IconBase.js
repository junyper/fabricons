import React, { PropTypes, Component } from 'react'
import shortid from 'shortid'

export default class BaseIcon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    viewBox: PropTypes.string.isRequired,
    title: PropTypes.string,
    desc: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
  };

  static defaultProps = {
    width: '2rem',
    height: '2rem'
  };

  constructor (props) {
    super()

    this.titleId = props.name + '__' + shortid.generate()
    this.descId = props.name + '__' + shortid.generate()
  }

  get role () {
    if (this.props.title) {
      return 'img'
    } else {
      return 'presentation'
    }
  }

  renderTitle () {
    const { title } = this.props
    return (title) ? (
      <title id={this.titleId}>{title}</title>
    ) : null
  }

  renderDesc () {
    const { desc } = this.props
    return (desc) ? (
      <desc id={this.descId}>{desc}</desc>
    ) : null
  }

  get labelledBy () {
    const ids = []

    if (this.props.title) {
      ids.push(this.titleId)
    }

    if (this.props.desc) {
      ids.push(this.descId)
    }

    return (ids.length > 0) ? ids.join(' ') : null
  }

  render() {
    const {
      title,
      width,
      height,
      viewBox
    } = this.props
    return (
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        aria-hidden={title ? null : 'true'}
        aria-labelledby={this.labelledBy}
        role={this.role}>
        {this.renderTitle()}
        {this.renderDesc()}
        <g role="presentation">
          {this.props.children}
        </g>
      </svg>
    )
  }
}
