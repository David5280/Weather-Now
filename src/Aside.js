import React from 'react';
import Form from './Form'

class Aside extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <aside>
        <h3>Enter Your US Zip-Code</h3>
        <Form getWeather={this.props.getWeather}/>
      </aside>
    )
  }
}

export default Aside;