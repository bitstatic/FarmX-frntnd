import { useState, useEffect } from "react";
import "./App.css";
import LoginSection from "./Components/signin/LoginSection";
import SignupSection from "./Components/signup/SignupSection";
import { Routes, Route, Link } from "react-router-dom";
import SplashScreen from "./Components/SpashScreen/SplashScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="/signup" element={<SignupSection />} />
      </Routes>
    </div>
  );
}

export default App;
