import React, { Component } from 'react'

export default class Syntax extends Component {
    render() {
      return <div className="formulaScreen">{this.props.expression}</div>;
      }
}
