import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../Categorys/FOM.css'
import Data from '../WinterOffer/offer.json'
import { useContext } from 'react';
import { CartThings } from '../../../App';
export const Winteroffer = () => {
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
      <div className="offcard" >

        <Accordion flush >
          <Accordion.Item eventKey="0" className='ani2'>
            <Accordion.Header>
              <div className='d-flex'>
                <div className="offimg">
                  <img src="https://i.pinimg.com/736x/7b/c9/e7/7bc9e7ba05ccc96cb1fc21e93cdcbfbf.jpg" width={'100px'} alt="" />
                </div>
                <div className="offtext ms-4 align-content-center">
                  <p>Dry Fruits offer upto 30 - 60 %OFF </p>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>

              <div className=" f-bg" style={{ background: 'rgb(178, 83, 62)' }}>
                <div className="container-fluid fom-innerbg">
                  {Data && Data.map(data => {
                    return (
                      <div key={data.id}>
                        <div className="d-flex flex-wrap justify-content-center">
                          {data.df && data.df.map(item => {
                            return (
                              <div key={item.id} className=''>

                                <div className="fom-card mx-1 my-2 my-lg-4 mx-lg-4 ">
                                  <div className="fom-item">

                                    <div className="fom-img d-flex">
                                      <img src={item.pic} alt="" className='im' />
                                      <button onClick={() => addTocart(item)}>+</button>
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

            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1"className='ani2'>
            <Accordion.Header>
              <div className='d-flex'>
                <div className="offimg">
                  <img src="https://i.pinimg.com/736x/6f/52/4b/6f524ba6bcdad9123e407782c70c550b.jpg" width={'100px'} alt="" />
                </div>
                <div className="offtext ms-4 align-content-center">
                  <p>Sweets offer upto 30 - 50 %OFF </p>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>

              <div className=" f-bg" style={{ background: 'rgb(178, 83, 62)' }}>
                <div className="container-fluid fom-innerbg">
                  {Data && Data.map(data => {
                    return (
                      <div key={data.id}>
                        <div className="d-flex flex-wrap justify-content-center">
                          {data.sweet && data.sweet.map(item => {
                            return (
                              <div key={item.id} className=''>

                                <div className="fom-card mx-1 my-2 my-lg-4 mx-lg-4 ">
                                  <div className="fom-item">

                                    <div className="fom-img d-flex">
                                      <img src={item.pic} alt="" className='im' />
                                      <button onClick={() => addTocart(item)}>+</button>
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

            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2"className='ani2'>
            <Accordion.Header>
              <div className='d-flex'>
                <div className="offimg">
                  <img src="https://i.pinimg.com/736x/64/58/76/6458765492afb4d81a940108edbd319d.jpg" width={'100px'} alt="" />
                </div>
                <div className="offtext ms-4 align-content-center">
                  <p>Dry Fruits offer upto 30 - 50 %OFF </p>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>

              <div className=" f-bg" style={{ background: 'rgb(178, 83, 62)' }}>
                <div className="container-fluid fom-innerbg">
                  {Data && Data.map(data => {
                    return (
                      <div key={data.id}>
                        <div className="d-flex flex-wrap justify-content-center">
                          {data.df && data.df.map(item => {
                            return (
                              <div key={item.id} className=''>

                                <div className="fom-card mx-1 my-2 my-lg-4 mx-lg-4 ">
                                  <div className="fom-item">

                                    <div className="fom-img d-flex">
                                      <img src={item.pic} alt="" className='im' />
                                      <button onClick={() => addTocart(item)}>+</button>
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

            </Accordion.Body>
          </Accordion.Item>

          
        </Accordion>
      </div>
    </>
  )
}
