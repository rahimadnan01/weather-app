import { useState } from "react";
import SearchBox from "./SearchBox";
import "./App.css";
import WeatherApp from "./WeatherApp";
function App() {
  return (
    <>
      <div className="main">
        <WeatherApp />
      </div>
    </>
  );
}

export default App;
