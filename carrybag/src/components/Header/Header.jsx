import {Link} from "react-router-dom";
import {LiaShoppingBagSolid} from "react-icons/lia";
import {CgProfile} from "react-icons/cg";
import {IoIosHome} from "react-icons/io"
import '../Header/Header.css'
import { CartThings } from "../../App";
import { useContext } from "react";
import React, { useState } from 'react';
import './DropdownMenu.css'
export const Header = () => {
  const{carts}= useContext(CartThings);
 const [open, setOpen] = useState(false);
 const toggleDropdown = () => { setOpen(!open); };

  return (
    <>
    <marquee style={{fontSize:'10px'}}> * * * * * * Purchase Above &#8377; 499 Delivery <span style={{color:'red'}}>Free </span>* * * * * * </marquee>
    <div className="navbar  sticky-top">
    <div className="logo"><p><span className="c ">Carry</span><span className="b">Bag</span> </p></div>
    <div className="icon  d-flex ">
        <div className="dropdown me-2"> <button className="dropbtn" onClick={toggleDropdown}> <CgProfile style={{color:'white', fontSize:"25px"}}/> </button> 
        {open && ( <div className="dropdown-content"> 
          <Link to={'/profile'}>Profile</Link>
           <Link to={'/about'}>About</Link> 
            </div> )} </div>
        
        <div className="home-icon me-3">   <Link to={"/"}><IoIosHome style={{color:'white', fontSize:"25px"}}/></Link>
    </div>
        
        <div className="cart-icon me-4"><Link to={"/Cart"}> <p className="cartno">{carts.length}</p><LiaShoppingBagSolid style={{color:'white', fontSize:"25px"}}/></Link>
        </div>
    </div>
    </div>
    </>
  )
}
