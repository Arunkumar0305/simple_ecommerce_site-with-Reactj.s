import  {useContext, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination } from 'swiper/modules';

import DD from './dd.json'
import "./Daliydeal.css"
import {TiShoppingCart} from "react-icons/ti";
import { CartThings } from '../../../App';
export const Daliydeal = () => {
  const[cart]=useState(DD);

 const {carts,setcarts}= useContext(CartThings);
  const addTocart=(item)=>{
   const existItem = carts.find((cartItem )=>
  cartItem.id === item.id)
   if(existItem){
    const existItemUpdate = carts.map((cartItem)=>
       cartItem.id === item.id ? {...cartItem,
         quantity: cartItem.quantity + 1}: cartItem )
         setcarts(existItemUpdate)
   }
   else{
    setcarts([...carts,{...item, quantity:1}])
   }
   console.log(carts);
   
  }
   
  return (
   <>
    <h4 className='ms-2 mt-4 mb-4 ' style={{fontSize:'20px'}}> Happy shopping &nbsp;<span style={{color:'orangered', fontWeight:"bolder", fontSize:'20px'}}>Deals Of The Day</span></h4>
    <div className="container-fluid ">
    <Swiper
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay:2000,
          disableOnInteraction:false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
         breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 40,
        
          },
          425:{
            slidesPerView: 3,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >

 {cart.map((item)=>(
  <div key={item.id} className='view1'>
            <SwiperSlide>

        <Card style={{ width: '10rem' }} className='ani1' >
         <div className='off '><span>{item.discount}</span></div> 
      <Card.Img variant="top" src={item.pic} />
      <Card.Body>
        <Card.Title style={{fontSize:"12px"}}>{item.name}</Card.Title>
        <Card.Text>
          <p style={{fontSize:'18px', fontWeight:'bolder'}}>&#8377;{item['d-price']}
            &nbsp; 
            <span style={{fontSize:'14px', textDecoration:'line-through' , color:"lightgray"}}>&#8377;{item.price}</span>
            </p>
        </Card.Text>
        <div className='d-flex justify-content-center ' >
         <button className='btn1 w-100 ' onClick={()=> addTocart(item)}>Add <TiShoppingCart/></button>
         </div>
      </Card.Body>
    </Card></SwiperSlide>
</div>
 ))}
 </Swiper>
</div> 
  </>
  )
}
