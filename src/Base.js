
import React, { Component, PropTypes } from 'react'
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin'


export default class Base extends Component {

  // https://github.com/reactjs/react-tabs/blob/master/lib%2Fhelpers%2FchildrenPropType.js
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.bool,
    ]),
  };

  constructor (...args) {
    super(...args)
    // http://facebook.github.io/react/docs/pure-render-mixin.html
    this.shouldComponentUpdate = this::shouldComponentUpdate
  }

  render () {
    return <div>{this.props.children}</div>
  }
}
