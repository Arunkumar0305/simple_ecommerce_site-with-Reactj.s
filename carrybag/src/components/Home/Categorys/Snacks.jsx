import React from 'react'
import './FOM.css'
import Data from './Category.json'
import { useContext } from 'react';
import { CartThings } from '../../../App';

export const Snacks = () => {
  const { carts, setcarts } = useContext(CartThings);
  const addTocart = (item) => {
    const existItem = carts.find((cartItem) =>
      cartItem.id === item.id)
    if (existItem) {
      const existItemUpdate = carts.map((cartItem) =>
        cartItem.id === item.id ? {
          ...cartItem,
          quantity: cartItem.quantity + 1
        } : cartItem)
      setcarts(existItemUpdate)
    }
    else {
      setcarts([...carts, { ...item, quantity: 1 }])
    }
    console.log(carts);

  }
  return (
    <>
      <div className=" fom-bg">
        <div className="container-fluid fom-innerbg">
          {Data && Data.map(data => {
            return (
              <div key={data.id}>
                <div className="d-flex flex-wrap justify-content-center">
                {data.snack && data.snack.map(item => {
                  return (
                      <div key={item.id} className=''>

                        <div className="fom-card mx-1 my-2 my-lg-4 mx-lg-4 ">
                          <div className="fom-item">

                            <div className="fom-img d-flex">
                              <img src={item.pic} alt="" className='im' />
                              <button onClick={()=>addTocart(item)}>+</button>
                            </div>
                            <div className="fom-txt mb-2"><p>{item.name}</p>
                            </div>
                            
                            <div className="fom-dis "><p>{item.discount}</p></div>
                            <div className="fom-pr "><p>&#8377;{item['d-price']} <span>&#8377;{item.price}</span></p>
                            </div>
                            
                            
                          </div>
                        </div>
                      </div>
                    
                  )
                })}</div>
              </div>
            )
          })}


        </div>

      </div>
    </>
  )
}
