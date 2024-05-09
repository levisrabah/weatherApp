import "../App.css";
import Weather from '../components/Weather';
import NavBar from "../components/NavBar";
import React from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Weather/>
    </div>
  );
}

export default App;
