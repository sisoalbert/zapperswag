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

const products = [
  {
    id: 1,
    name: "Magnet",
    href: "#",
    price: 120,
    imageSrc:
      "https://ik.imagekit.io/ylhb6uaqdmf/zapper/magnet_ApisAFHD4.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1664774281513",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Active t-shirt",
    href: "#",
    price: 145,
    imageSrc:
      "https://ik.imagekit.io/ylhb6uaqdmf/zapper/work-126548450-classic-t-shirt_ItQj4QYqII.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1664774282107",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 3,
    name: "Bucket hat",
    href: "#",
    price: 320,
    imageSrc:
      "https://ik.imagekit.io/ylhb6uaqdmf/zapper/work-126548450-bucket-hat_2zWhNyPY9c.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1664774281902",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 4,
    name: "Light weight hoodie",
    href: "#",
    price: 500,
    imageSrc:
      "https://ik.imagekit.io/ylhb6uaqdmf/zapper/work-126548450-lightweight-hoodie_EY-rhCbPRA.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1664774281878",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 5,
    name: "Classic t-shirt",
    href: "#",
    price: 180,
    imageSrc:
      "https://ik.imagekit.io/ylhb6uaqdmf/zapper/work-126548450-classic-t-shirt_ItQj4QYqII.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1664774282107",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Dad cap",
    href: "#",
    price: 200,
    imageSrc:
      "https://ik.imagekit.io/ylhb6uaqdmf/zapper/work-126548450-dad-hat_ZASlULkSA2.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1664774281862",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 7,
    name: "Tank top",
    href: "#",
    price: 160,
    imageSrc:
      "https://ik.imagekit.io/ylhb6uaqdmf/zapper/work-126548450-tank-top_vmX0LedYA.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1664774281813",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 8,
    name: "Spiral notebook",
    href: "#",
    price: 75,
    imageSrc:
      "https://ik.imagekit.io/ylhb6uaqdmf/zapper/work-126548450-spiral-notebook_87QYPba74X.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1664774281793",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
];
export default function ProductsList() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const ui = useSelector((state: uiStateType) => state.ui);
  const [newProducts, setNewProducts] = useState<string[]>([]);

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

  // function MyComponent() {
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.products);

  // console.log("product:", products.loading);
  // console.log("product:", products.list);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  // if (products.loading) {
  //   return (
  //     <>
  //       <div className="loading-container">
  //         <div className="loading-icon">
  //           <img src={loadingIcon} className="loadingicon" alt="loading" />
  //         </div>
  //         <div className="loading-text">
  //           <h1>Loading...</h1>
  //         </div>
  //       </div>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <div className="bg-white">
  //         <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  //           <h2 className="sr-only">Products</h2>
  //           <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
  //             {products.list.map(
  //               (product: {
  //                 id: React.Key | null;
  //                 href: string;
  //                 imageSrc: string;
  //                 imageAlt: string;
  //                 name:
  //                   | string
  //                   | number
  //                   | boolean
  //                   | React.ReactElement<
  //                       any,
  //                       string | React.JSXElementConstructor<any>
  //                     >
  //                   | React.ReactFragment
  //                   | React.ReactPortal
  //                   | null;

  //                 price:
  //                   | string
  //                   | number
  //                   | boolean
  //                   | React.ReactElement<
  //                       any,
  //                       string | React.JSXElementConstructor<any>
  //                     >
  //                   | React.ReactFragment
  //                   | React.ReactPortal
  //                   | null;
  //               }) => (
  //                 <a key={product.id} href={product.href} className="group">
  //                   <div
  //                     onClick={() => {
  //                       navigate(`/${product.id}`);
  //                     }}
  //                     className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
  //                   >
  //                     <img
  //                       src={product.imageSrc}
  //                       alt={product.imageAlt}
  //                       className="h-full w-full object-cover object-center group-hover:opacity-75"
  //                     />
  //                   </div>
  //                   <h3 className="mt-4 text-sm text-gray-700">
  //                     {product.name}
  //                   </h3>
  //                   <p className="mt-1 text-lg font-medium text-gray-900">
  //                     R{product.price}
  //                   </p>
  //                 </a>
  //               )
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
  // }
  return (
    <div className="bg-white">
      {/* <MyComponent /> */}
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
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
              {/* <button
                onClick={() => {
                  dispatch(toggle());
                }}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 py-3 px-8 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                open cart
              </button> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
