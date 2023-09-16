import React, { useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = (props) => {
  const [products, setProducts] = useState([]);
  const [updated, setUpdated] = useState(false);

  return (
    <>
      <ProductForm
        products={products}
        setProducts={setProducts}
        setUpdated={setUpdated}
        updated={updated}
      />
      <hr />
      <ProductList
        products={products}
        setProducts={setProducts}
        setUpdated={setUpdated}
        updated={updated}
      />
    </>
  );
};
export default Main;