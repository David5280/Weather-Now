import React from 'react';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';
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
    const zipcode = e.target.elements.zipcode.value ;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&APPID=${API_KEY}`);
    const data = await api_call.json();
    // console.log(data);
    this.setState({
      temperature: data.list.map(item => item.main.temp),
      city: data.city.name,
      country: data.city.country,
      humidity: data.list.map(item => item.main.humidity),
      description: data.list.map(item => item.weather.map(item2 => item2.description)),
      error: ''
    })
    console.log('temp', this.state.temperature)
    console.log('city', this.state.city)
    console.log('country', this.state.country)
    console.log('humidity', this.state.humidity)
    console.log('description', this.state.description)
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Aside getWeather={this.getWeather}/>
        <Footer />
      </div>
    );
  }  
}

export default App;
