import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./App.css";

const API_KEY = "a4cb189fbb04f8d70e058924e975f84d";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await api_url.json();

      const sunset = data.sys.sunset;
      const date1 = new Date(sunset * 1000);
      const sunset_date = date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds();

      const sunrise = data.sys.sunrise;
      const date2 = new Date(sunrise * 1000);
      const sunrise_date = date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getSeconds();

      const temp_c = (data.main.temp - 273.15).toFixed(2);

      this.setState({
        temp: temp_c,
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_date,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Enter the city"
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
