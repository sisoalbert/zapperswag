/*
  changes to the config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toggle } from "../redux/uiSlice";
import { uiStateType } from "../types/types";
import { fetchProducts } from "../redux/productsSlice";
import React, { useState, useEffect } from "react";
import loadingIcon from "../assets/loader.svg";

type ProductInformation = {
  id: number;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  name: string;
  map: any;
};

export default function ProductsList() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const ui = useSelector((state: uiStateType) => state.ui);
  const [newProducts, setNewProducts] = useState<ProductInformation>();

  const FetchNewProducts = async () => {
    const requestOptions = {
      method: "POST",
      // redirect: "follow"
    };
    const response = await fetch(
      "https://us-east-1.aws.data.mongodb-api.com/app/zapperswag-oifze/endpoint/zapper",
      requestOptions
    );
    const data = await response.json();
    // dispatch(save(data));
    setNewProducts(data);
    console.log("data", data);
  };
  useEffect(() => {
    FetchNewProducts();
  }, []);

  return (
    <div className="bg-white">
      {/* <MyComponent /> */}
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {newProducts?.map((product: ProductInformation) => (
            <a key={product.id} href={product.href} className="group">
              <div
                onClick={() => {
                  navigate(`/${product.id}`);
                }}
                className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
              >
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                R{product.price}
              </p>
              <button
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      imageSrc: product.imageSrc,
                      quantity: 0,
                    })
                  );
                }}
                // type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
