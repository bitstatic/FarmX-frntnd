import { useState, useEffect } from "react";
import "./App.css";
import LoginSection from "./Components/signin/LoginSection";
import SignupSection from "./Components/signup/SignupSection";
import { Routes, Route, Link } from "react-router-dom";
import SplashScreen from "./Components/SpashScreen/SplashScreen";
import Home from "./Components/home/Home";
import BuyProf from "./Components/buyProfile/BuyProf";
import SearchPage from "./Components/searchPage/SearchPage";
import ProductPage from "./Components/product/ProductPage";
import PlaceBidPage from "./Components/product/PlaceBidPage";
import ConfirmationPage from "./Components/Confirmation/ConfirmationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="/signup" element={<SignupSection />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/buy" element={<BuyProf/>} />
        <Route path="/home/buy/search" element={<SearchPage/>} />
        <Route path="/home/buy/search/product" element={<ProductPage/>} />
        <Route path="/home/buy/search/product/bid" element={<PlaceBidPage/>} />
        <Route path="/home/buy/search/product/confirm" element={<ConfirmationPage/>} />
      </Routes>
    </div>
  );
}

export default App;
