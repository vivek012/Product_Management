import ProductDetails from "./productDetail";

function Products(props) {

  return (
    <>
      <ul className="shadow-2xl my-9 select-none">
        <li className="w-full {'bg-amber-300 ': props.isAvailable, 'bg-amber-800 ': !props.isAvailable,} ">
          <div className="flex justify-between p-7 -48 space-y-2 ">
            <div className="w-[70%] space-y-2">
              <h5 className="font-bold font-josefin">{props.name}</h5>
              <p className="italic">
                {props.description}
              </p>
              <ProductDetails
              price={props.price} 
              isAvailable={props.isAvailable}
              >
              </ProductDetails>
            </div>
            <img className="w-32 " src={props.imageUrl}alt=" image" />
          </div>
        </li>
      </ul>
    </>
  );
}

export default Products;