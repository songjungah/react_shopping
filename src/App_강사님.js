// npm install react-router-dom @reduxjs/toolkit react-redux react-icons react-loader-spinner
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Cart from "./pages/cart";
import Home from "./pages/home";
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
