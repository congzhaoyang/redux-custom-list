import React, {Component} from 'react'

import AppBar from '../common/AppBar/AppBar'

class CustomList extends Component {
  constructor(props) {
    super(props)
  } 

  render() {
    return (
      <section className="custom">
        <AppBar title="习惯"/>

      </section>
    )
  }
}

export default CustomList