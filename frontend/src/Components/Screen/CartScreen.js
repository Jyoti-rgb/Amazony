import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addToCart } from "../../redux/cart/cartAction";

function CartScreen() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log(qty);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductID: {id} Qty:{qty}
      </p>
    </div>
  );
}

export default CartScreen;
