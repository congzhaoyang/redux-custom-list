import React, { Component } from 'react'
import './app-bar.css'

class AppBar extends Component {
  constructor(props) {
    super(props)
  }
  
  render () {
    return (
      <section className="app-bar">
        <div className="title">{this.props.title}</div>
      </section>
    )
  }
}

export default AppBar