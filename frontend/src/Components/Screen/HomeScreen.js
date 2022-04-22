// import axios from "axios";
import React, { useEffect } from "react";
import Product from "../Product/Product";
import LoadingBox from "../LoadingBox/LoadingBox";
import MessageBox from "../MessageBox/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "../../redux/product/productActions";

export default function HomeScreen() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(productListAction());
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get("/api/products");
  //       setLoading(false);
  //       setProducts(data);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
