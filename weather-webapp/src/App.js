import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "166500be60a2e38e450a103d5d20b7ef";

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=oakland,ca&appid=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <Title />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
