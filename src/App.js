import React, { useState } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=22e8f08f6e5e49b317684c2881418399`;

  const handleSearch = async (event) => {
    if (event.key === "Enter") {
      const res = await axios.get(url);
      setData(res.data);
      console.log(res.data);
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={handleSearch}
          type="text"
          placeholder="Enter Location"
        />
      </div>
      <div className="container">
        {data ? (
          <>
            <div className="top">
              <div className="location">
                <p>{data?.name}</p>
              </div>
              <div className="temp">
                <h1>{data?.main?.temp.toFixed()} °F</h1>
              </div>
              <div className="description">
                <p>{data?.weather ? <p>{data.weather[0].main}</p> : null}</p>
              </div>
            </div>
            <div className="bottom">
              <div className="feels">
                <p className="bold">{data?.main?.feels_like.toFixed()} °F</p>
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                <p className="bold">{data?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
              <div className="wind">
                <p className="bold">{data?.wind?.speed.toFixed()} MPH</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </>
        ) : (
          <div className="weatherApp">
            <h2>WEATHER APPLICATION <i class="fa-sharp fa-solid fa-bolt"></i></h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
