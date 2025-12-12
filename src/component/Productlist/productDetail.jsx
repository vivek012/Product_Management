
import { useState } from "react";
import Button from "./button";




function ProductDetails(props) {

  
  let badgeclass = "badge ";
  badgeclass += props.isAvailable ? "bg-green-700" : "bg-red-700";
  
let [productCount , setProductCount]= useState(0)
  
  // let productCount = 10;
  function displayFormatProductCount() {
    return productCount > 0 ? (
      productCount
    ) : (
      <h1 className="text-red-600 font-bold">zero</h1>
    )
  };

  let incrementProduct= ()=>{
    // productCount++
    // console.log(productCount)
    setProductCount(++productCount)
  }

  let decrementProduct= ()=>{     
  //   productCount--
  //   console.log(productCount)
  if(productCount<0){
    return 0
  }
  setProductCount(--productCount)
  }

  return (
    <>
    {props.children}
      <div className="flex  items-center justify-start">
        <h6 >${props.price}</h6>
        <Button onClickEvent={decrementProduct} disable = {productCount == 0}  children="-"></Button>
        <span className="text-2xl">{displayFormatProductCount()}</span>
       <Button onClickEvent={incrementProduct}>+</Button>
        <span className={badgeclass}>
          {props.isAvailable ? "Available" : "UnAvailable"}
        </span>
      </div>
    </>
  );
}

export default ProductDetails;
