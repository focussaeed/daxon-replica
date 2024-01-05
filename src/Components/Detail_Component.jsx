import React, { useState } from "react";
import image1 from "../assets/pro-hm1-1.webp";
import { Toggle_Components } from "./Toggle_Components";


export const Detail_Component = () => {

  const [plus, setPlus] = useState(0);

  const Quantity_plus = () => {
    setPlus((count) => {
      return count + 1;
    });
  };

  const Quantity_minus = () => {
    setPlus((count) => {
      return count - 1;
    });
  };

  return (
    <div className="bg-slate-300">
      <div className="container">
        <div className="row-span-1 bg-blue-100 w-full">
          <h1 className="font-extrabold fs-2 text-center">
            {" "}
            Product Detail Page{" "}
          </h1>
        </div>

        <div class="grid grid-cols-2">
          <div className="flex justify-center">
            {/* <Card_Components image={image1} /> */}
            <img src={image1} alt="" />
          </div>

          <div class="grid grid-rows-8 grid-flow-col pl-4">
            <div class="text-lg font-semibold">Life Style</div>
            <div class="text-4xl font-bold text-blue-700">
              Compfortable Chair
            </div>
            <div class="text-lg font-bold">
              Color :
              <div>
                <ul className="flex gap-x-6 pl-12 ">
                  <li className="bg-green-500 rounded-full text-green-500">
                    Gren
                  </li>
                  <li className="bg-blue-700 rounded-full text-blue-700">
                    Blue
                  </li>
                  <li className="bg-red-500 rounded-full text-red-500">Reed</li>
                  <li className="bg-yellow-500 rounded-full text-yellow-500">
                    Yeow
                  </li>
                </ul>
              </div>
            </div>

            <div class="text-lg font-bold">
              {" "}
              Size :
              <div>
                <ul className="flex gap-x-6 pl-12 ">
                  <li>S</li>
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                </ul>
              </div>
            </div>

            <div class="text-2xl font-bold pt-4"> $ 250.00</div>

            <div className="flex items-center justify-center box-border h-12 w-32 p-4 border-4 rounded-2xl border-blue-500 ">
              <button class="text-2xl" onClick={Quantity_minus}>
                -
              </button>

              <div class="text-2xl pr-5 pl-5">{plus}</div>

              <button class="text-2xl" onClick={Quantity_plus}>
                +
              </button>
            </div>

            <div class="flex gap-x-8 text-sm">
              <div>
                {" "}
                <i class="fa-solid fa-code-compare pl-5"></i> Compare
              </div>
              <div>
                {" "}
                <i class="fa-regular fa-heart "></i> Add to wish list
              </div>
            </div>

            <div>
              {" "}
              <button className="flex items-center justify-center box-border h-12 w-40 p-4 border-4 rounded-2xl border-blue-500 fs-5">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
