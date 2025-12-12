import { useState } from "react";

const ProductForm = (props) => {


  let [pName, setPName]= useState("");
  let [pImage, setImage]= useState("");
  let [pPrice, setPrice]= useState("");
  let [pDescription, setDescription]= useState("");
  let [pAvailability, setAvailability]= useState('');




  function imageInputHandler(e) {
    setImage(e.target.value);
    // SetusetInput({
    //   ...userInput,
    //   image : e.target.value})
  }
  function nameInputHandler(e) {
    setPName(e.target.value);
    // SetusetInput({
    //   ...userInput,
    //   pName : e.target.value})
    
  }
  
  function priceInputHandler(e) {
    setPrice(e.target.value);
    // SetusetInput({
    //   ...userInput,
    //   price : e.target.value})
  
  
  }
  function descriptionInputHandler(e) {
    setDescription(e.target.value);
    // SetusetInput({
    //   ...userInput,
    //   description : e.target.value})
  
  }
  function availabilityInputHandler(e) {
    setAvailability(e.target.checked);
    // SetusetInput({
    //   ...userInput,
    //   availability : e.target.value})
  }
  

  function createProductEventHandler(event){
    event.preventDefault();
    let product = {
      pName: pName,
      desc: pDescription,
      isAvailable: Boolean(pAvailability),
      image:pImage,
      price: Number(pPrice),

    }
    setPrice("")
    setPName("")
    setImage("")
    setDescription("")
    setAvailability(false)
    
    // console.log(product)

    props.createProduct(product)
    props.onCancel();

  }

  return (
    <div>
      <form onSubmit={createProductEventHandler} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Product Name"
            value={pName}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
            onChange={nameInputHandler}
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Product Price
          </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="price"
            value={pPrice}
            placeholder="Product Price"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
            onChange={priceInputHandler}
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Product Description
          </label>
          <input
            type="text"
            id="description"
            value={pDescription}
            placeholder="Product Description"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
            onChange = {descriptionInputHandler}
          />
        </div>

        <div className="md:col-span-2 flex items-center space-x-2">
          <input
            type="checkbox"
            role="switch"
            id="isAvailable"
            checked={pAvailability}
            className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            onChange={availabilityInputHandler}
          />
          <label
            htmlFor="isAvailable"
            className="text-sm font-medium text-gray-700"
          >
            Is product available in stock?
          </label>
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="select-image"
            className="block text-sm font-medium text-gray-700"
          >
            Select product image
          </label>
          <input
            type="file"
            id="select-image"
            value={pImage}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
            onChange={imageInputHandler}
          />
        </div>

        <div className="md:col-span-2">
          <button
          // onClick={props.onCancel}
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition my-5"
          >
            Add Product
          </button>
          <button onClick= {props.onCancel} className="w-full rounded-md bg-red-600 px-4 py-2 text-white hover:bg-blue-700 transition" type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};
export default ProductForm;
