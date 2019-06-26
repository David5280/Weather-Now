import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <form className='location-form' onSubmit={this.props.getWeather}>
        <input type='text' name='zipcode' placeholder='US Zipcode...' />
        <button>Get Forecast</button>
      </form>
    )
  }
}

export default Form;
