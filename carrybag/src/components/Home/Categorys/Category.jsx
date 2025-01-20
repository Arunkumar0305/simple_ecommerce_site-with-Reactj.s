import React, { useState } from 'react'
import {Link} from "react-router-dom";

import "./Category.css"


export const Category = () => {
  return (
    <>
    <section className='view ch '>
      <h4 className='ms-4 mb-4 ani1'>Shop By <span style={{color:'orangered', fontWeight:"bolder"}}>Categorys</span></h4>
      <div className="container">

        <div className="row d-flex justify-content-center  ">

       <div className="cat-items text-center col-4  col-lg-2 ani1">
       <Link to={'/Foodgrains, Oil & Masala'} className='link'> 
        <div className="cat-img">
          <img src="https://www.saravanaonline.in/c/19-category_feature/foodgrains-oil-masala.jpg" alt="sorry!" className='img-fluid d-block w-100' />
        </div>
        <p>Foodgrains, Oil & Masala</p>
      </Link>
      </div>

       <div className="cat-items text-center col-4  col-lg-2 ani1">
       <Link to={'/Dairy & Bakery'} className='link'> 
        <div className="cat-img">
          <img src="https://i.pinimg.com/236x/e1/91/82/e191828fc44e8037b0d33d145752ed92.jpg" alt="sorry!" className='img-fluid d-block w-100' />
        </div>
        <p>Dairy & Bakery</p>
      </Link>
      </div>

       <div className="cat-items text-center col-4  col-lg-2 ani1">
       <Link to={'/Snacks'} className='link'> 
        <div className="cat-img">
          <img src="https://i.pinimg.com/736x/1f/55/0d/1f550d09b33dcd2f444725c79982943c.jpg" alt="sorry!" className='img-fluid d-block w-100' />
        </div>
        <p>Snacks</p>
      </Link>
      </div>
       <div className="cat-items text-center col-4  col-lg-2 ani1">
       <Link to={'/Beverages'} className='link'> 
        <div className="cat-img">
          <img src="https://i.pinimg.com/736x/51/4d/79/514d7911a6a294f6aa08c493aca3f4f1.jpg" alt="sorry!" className='img-fluid d-block w-100' />
        </div>
        <p>Beverages</p>
      </Link>
      </div>

       <div className="cat-items text-center col-4  col-lg-2 ani1">
       <Link to={'/Frozen Food'} className='link'> 
        <div className="cat-img">
          <img src="https://i.pinimg.com/236x/5e/36/7a/5e367ae79e1fe1947cd7b81aec502a21.jpg" alt="sorry!" className='img-fluid d-block w-100' />
        </div>
        <p>Frozen Food</p>
      </Link>
      </div>

       <div className="cat-items text-center col-4  col-lg-2 ani1">
       <Link to={'/Home & Kitchen'} className='link'> 
        <div className="cat-img">
          <img src="https://i.pinimg.com/236x/ae/69/c7/ae69c7a81e9b8b23de8b236ea6f20424.jpg" alt="sorry!" className='img-fluid d-block w-100' />
        </div>
        <p>Home & Kitchen</p>
      </Link>
      </div>
      
       
      </div>
       </div>
        
        
    </section>
    </>
  )
}
