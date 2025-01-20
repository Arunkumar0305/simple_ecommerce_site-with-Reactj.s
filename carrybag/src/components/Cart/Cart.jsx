import { useContext } from "react"
import { CartThings } from "../../App"
import {Link} from "react-router-dom";

import './Cart.css'
import {FaRegTrashCan} from "react-icons/fa6";
export const Cart = () => {
  const{carts,setcarts}= useContext(CartThings);
  const removeFromcart =(id)=>{
    setcarts(carts.filter((item)=>item.id !== id));
  }

  const updateQuantity = (id, amount)=>{
    const updatedcart = carts.map(item=>{
      if(item.id === id){
        return { ...item, quantity: item.quantity + amount};
        }
        return item;
      });
      const filteredcart = updatedcart.filter(item =>
        item.quantity > 0);
    setcarts(filteredcart);

  }

  const totalitems = carts.reduce((sum, item)=>
  sum + item.quantity,0);
  const totalprice = carts.reduce((sum, item)=>
    sum + item.price * item.quantity,0); 
  const totaldiscount = carts.reduce((sum, item)=>
    sum + item.dis* item.quantity,0); 
  const deliveryCharge = totalprice > 499 ? 0 : 40 ;
  const finalprice= totalprice + deliveryCharge - totaldiscount;
 
  return (
    <>
    {carts.length === 0 && (<div className="nocart"> <img src="../src/components/Cart/cartAni.gif" className="img-fluid"/>
    <h1>Your Cart is empty!</h1><br /><Link to={"/"}>Shop now</Link>
    </div>)}
    {carts.length > 0 && (<div className="cartbg ">
    {
      carts.map((item)=>(
        <div key={item.id} className="pt-3">
          <div className="viewer d-flex flex-row  p-2 col-10 mb-3 ">
            <div className="pimg "><img src={item.pic} className="img-fluid" /></div>
            <div className=" d-flex flex-column"><span>{item.name} </span>
            <div><br />
              <span className="me-3" style={{fontSize:'12px',textDecoration:'line-through'}}>  &#8377;{ item.price}</span>
              <span>&#8377;{item['d-price']}</span>
            </div> <span style={{fontSize:'12px' , color:"green"}}>&#8377;{item.dis} <strong>&#8595;</strong>   </span><br />
          <div>
          <button onClick={()=>updateQuantity(item.id, -1)}> <span>-</span> </button>
          <span className="me-2 nos">{item.quantity}</span>
          <button onClick={()=>updateQuantity(item.id, 1)}><span>+</span> </button>
          <button className="remove" onClick={()=>removeFromcart(item.id)}><FaRegTrashCan/></button>
            </div><br />
</div>
            
          </div>
                  </div>
      ))
    }
    <div style={{background:"lightgray", height:"15px"}}></div>
<div className="totbg">
    <div className="totcard ">
      
      <h5 >Price Details</h5>
      <br /><br />
      <p><label>Price ( {totalitems} items) :</label>
      <span className="end1"> &#8377;{totalprice}</span>
      </p>
      <p><label>Discount :</label>
      <span className="end2 "> -{totaldiscount}</span>
      </p>
      <p><label>Delivery Fee :</label>
      <span className="end1 "> &#8377;{deliveryCharge}</span>
      </p>
      
      <p className="totamt pt-1 pb-1"><label>Total Amount :</label>
      <span> <b>&#8377;{finalprice}</b></span>
      </p>
      </div>
      <p className="ps-4 fw-bold text-success ">You will save &#8377;{totaldiscount} on this order</p>
      
    </div>
    <div style={{background:"lightgray", height:"15px"}}></div>

    </div> 
  )}
    </>
  )
}
