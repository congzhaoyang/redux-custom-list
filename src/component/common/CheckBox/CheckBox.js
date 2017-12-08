import React, {Component} from 'react'
import './check-box.css'

class CheckBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let className = ''
    if(this.props.checked) {
      className = "check-box checked"
    } else {
      className = "check-box unchecked"
    }

    return (
      <section className={className}>
        <i className="material-icons">done</i>
      </section>
    )
  }
}

export default CheckBox