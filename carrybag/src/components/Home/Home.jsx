import { useState } from "react"
import Banner1 from "./Banner/Banner1"
import { Category } from "./Categorys/Category"
import { Daliydeal } from "./Dailydeal/Daliydeal"
import { Pricecategory } from "./Pricecategory/Pricecategory"
import { Newproduct } from "./New_Product/Newproduct"
import { Winteroffer } from "./WinterOffer/Winteroffer"


export const Home = () => {
  
  return (
    <>
    {/* <br /> */}
    <Banner1/>
    {/* <br /> */}
    <img src="../src/components/Home/Categorys/design1.svg" />
    <Category/>
    <img src="../src/components/Home/Categorys/design2.svg" />
    <Pricecategory/><br />
    <div style={{background:"lightgray", height:"15px"}}></div>
    <Daliydeal/><br />
    <div style={{background:"lightgray", height:"15px"}}></div>
    <Newproduct/>
    <div style={{background:"lightgray", height:"15px"}}></div>
    <br />
    <Winteroffer/>
    <br />
    <div style={{background:"lightgray", height:"15px"}}></div>
    <br /><br />
    </>
  )
}
