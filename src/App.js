import React from "react";
import { hot } from 'react-hot-loader/root';
import ProductList from "./pages/ProductList";
import '../styles/globals.css';

function App() {
  return (
    <>
      <ProductList>
      </ProductList>
    </>
  );
}

export default hot(App);