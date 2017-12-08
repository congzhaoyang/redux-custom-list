import React, {Component} from 'react'

class CustomItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className="custom-item"
        style={{
          textDecoration: this.props.completed ? 
          'line-through': 'none'
        }}
      >
        
      </li>
    )
  }
}

export default CustomItem