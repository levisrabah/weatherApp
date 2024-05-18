import "../App.css";
import Weather from '../components/Weather';
import NavBar from "../components/NavBar";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Weather/>
    </div>
  );
}

export default App;
