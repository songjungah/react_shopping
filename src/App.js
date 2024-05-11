// npm install react-router-dom @reduxjs/toolkit react-redux react-icons react-loader-spinner
// 1. index.js 에서 BrowserRouter 추가
// 2. App.js 에서 Home과 Cart를 라우터로 감싸기 / => Home /cart => Cart
// path='/' element={<Home/>}
// path='/cart'  element={<Cart/>}
import Header from "./components/header/header";
import Home from "./pages/home";
import Cart from "./pages/cart";
import { Route, Routes } from "react-router-dom";
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
