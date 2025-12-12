import Products from "./products";

function ProductList(props) {
  console.log(props.newProductList);

  // if (props.newProductList.length === 0) {
  //   return <h3 className=" ">No product available</h3>;
  // }
   
  return ( props.newProductList.length === 0 ? <h3 className=" ">No product available</h3>:
    <>
      {props.newProductList.map((product) => {
        return (
          <Products
            key={product?.pID}
            id={product?.pID}
            name={product?.pName}
            description={product?.desc}
            isAvailable={product?.isAvailable}
            imageUrl={product?.image}
            price={product?.price}
          />
        );
      })}
    </>
  );
}

export default ProductList;
