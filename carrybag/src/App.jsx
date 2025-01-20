import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home';
import { Cart } from './components/Cart/Cart';
import { createContext, useState } from 'react';
import { FOM } from './components/Home/Categorys/FOM';
import { DairyBakery } from './components/Home/Categorys/DairyBakery';
import { Snacks } from './components/Home/Categorys/Snacks';
import { Beverages } from './components/Home/Categorys/Beverages';
import { Frozenfood } from './components/Home/Categorys/Frozenfood';
import { HK } from './components/Home/Categorys/HK';
import { Profile } from './components/Header/Profile';
import { About } from './components/Header/About';
export const CartThings = createContext();
function App() {
  const[carts,setcarts]=useState([]);

  return (
    <CartThings.Provider value={{carts,setcarts}}>
    <BrowserRouter>
       <Header />
       <div className="holder">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Foodgrains, Oil & Masala" element={<FOM/>}/>
          <Route path="/Dairy & Bakery" element={<DairyBakery/>}/>
          <Route path="/Snacks" element={<Snacks/>}/>
          <Route path="/Beverages" element={<Beverages/>}/>
          <Route path="/Frozen Food" element={<Frozenfood/>}/>
          <Route path="/Home & Kitchen" element={<HK/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
       </div>
    </BrowserRouter>   
    </CartThings.Provider>
  )
}

export default App
