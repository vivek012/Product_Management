import ProductList from "./component/Productlist/ProductList";
import CreateProduct from "./component/CreateProduct/CreateProduct";
import "./App.css";
import { useState } from "react";
import FilterProduct from "./component/filterProduct/filterProduct";

const products = [
  {
    pID: 1,
    pName: "Fresh Milk",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "/images/fresh-milk.png",
    price: 12,
  },
  {
    pID: 2,
    pName: "Cottage Cheese",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "/images/cottage-cheese.png",
    price: 10,
  },
  {
    pID: 3,
    pName: "Brocoli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "/images/brocoli.png",
    price: 15,
  },
  {
    pID: 4,
    pName: "Oranges",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "/images/oranges.png",
    price: 20,
  },
  {
    pID: 5,
    pName: "Olive oil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "/images/olive-oil.png",
    price: 14,
  },
];

function App(props) {
  let [newProductList, setNewProductList] = useState(products);
  let [filterText, setFilterText] = useState("all");


  let filterProductList = newProductList.filter ((product) => {
    if (filterText === "available") {
      return product.isAvailable === true;
    } else if (filterText === "unavailable") {
      return product.isAvailable === false;
    } else {
      return product;
    }
  });
  function createProduct(product) {
    
    product.pID = newProductList.length + 1;
    setNewProductList([product, ...newProductList]);
  }

  function onFilterValueSelected(filterValue) {
    setFilterText(filterValue);
  }
  return (
    <>
      <div className=" flex justify-center  ">
        <div className="">
          <CreateProduct createProduct={createProduct} />
          <FilterProduct
            onFilterValueSelected={onFilterValueSelected}
          ></FilterProduct>
          <ProductList newProductList={filterProductList} />
        </div>
      </div>
    </>
  );
}

export default App;




