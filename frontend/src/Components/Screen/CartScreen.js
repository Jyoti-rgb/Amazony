import React from "react";
import { useLocation, useParams } from "react-router-dom";

function CartScreen() {
  useParams();
  const { id } = useParams();

  const girl = ["jyoti", "18", "female"];

  const [name, age, gender] = girl;

  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log(qty);
  return (
    <div>
      <h1>
        Cart Screen {name} {age} {gender}
      </h1>
      <p>
        ADD TO CART : ProductID: {id} Qty:{qty}
      </p>
    </div>
  );
}

export default CartScreen;
