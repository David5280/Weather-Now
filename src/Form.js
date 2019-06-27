import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <form className='location-form' onSubmit={this.props.getWeather}>
        <input type='text' name='zipcode' placeholder='US Zipcode...' className='location-form-input' />
        <button className='location-form-input'>Get Forecast</button>
      </form>
    )
  }
}

export default Form;
