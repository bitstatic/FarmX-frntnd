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
import PlaceBuyPage from "./Components/product/PlaceBuy";
import ConfirmationPage from "./Components/OrderConfirmation/OrderConfirmationPage";
import SellerDashboard from "./Components/SellerDashboard/SellerDashboardPage";
import SellList from "./Components/SellList/SellListPage";
import AddSellPage from "./Components/AddSell/AddSellPage";
import RegisterPage from "./Components/MandiRegister/RegisterPage";
import GeneralCon from "./Components/GeneralConfirmation/GeneralConfirmation";

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
        <Route path="/home/buy/search/product/buy" element={<PlaceBuyPage/>} />
        <Route path="/home/buy/search/product/confirm" element={<ConfirmationPage/>} />
        
        <Route path="/dashboard" element={<SellerDashboard />} />
        <Route path="/dashboard/sell-list" element={<SellList />} />
        <Route path="/dashboard/add-sell" element={<AddSellPage />} />
        <Route path="/dashboard/register-page" element={<RegisterPage />} />
        <Route path="/dashboard/confirm" element={<GeneralCon />} />
      </Routes>
    </div>
  );
}

export default App;
