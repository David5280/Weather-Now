import React from 'react';
import Header from './Header';
import Form from './Form'
import DarkSkyApi from 'dark-sky-api';
import './CSS/index.scss';

const API_KEY = 'c6e5fa0baf121d492ea445e4808ba14d'


// const currentWeather;
// const weekForecast;

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value ;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.syts.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Form getWeather={this.getWeather}/>
      </div>
    );
  }  
}

export default App;
