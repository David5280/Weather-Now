import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <form className='location-form'>
        <input type='text' name='city' placeholder='City...' />
        <input type='text' name='country' placeholder='Country...' />
        <button>Get Forecast</button>
      </form>
    )
  }
}

export default Form;
