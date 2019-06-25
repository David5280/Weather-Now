import React from 'react';
import Header from './Header';
import Form from './Form'
import DarkSkyApi from 'dark-sky-api';
import './CSS/index.scss';

// DarkSkyApi.apiKey = '2970abeb55f410d97c916884401dcbd7';


// const currentWeather;
// const weekForecast;

class App extends React.Component {

  getWeather = async() => {
    const api_call = await fetch('https://api.darksky.net/forecast/2970abeb55f410d97c916884401dcbd7/39.73915,-104.9847/?exclude=currently,minutely');
    const data = await api_call.json();
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }  
}

export default App;
