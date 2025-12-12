import { useState } from "react"
import ProductForm from "./ProductForm"

const CreateProduct = (props) => {
  let[showForm  ,setShowForm]=useState(false)
  function onCreateProduct(product){
    //  console.log(product)
     props.createProduct(product)

  }

  function onCreateNewProduct(){
    setShowForm(true)
  }
  
  function onProductSubmittedOrCancelled(){
    setShowForm(false);
  }

  return (
    <div className=" shadow-2xl flex justify-center py-12">
        <div className="w-[60%] ">
          {!showForm && (
            <button onClick={onCreateNewProduct} className="border-2 m-5">Create Product</button>
          )}
           {showForm && (
            <ProductForm onCancel={onProductSubmittedOrCancelled} createProduct={onCreateProduct}></ProductForm>
            )}
        </div>
    </div>
  )
}

export default CreateProduct;
