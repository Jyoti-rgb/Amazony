import React, { useEffect } from "react";
// import data from "../Data/data";
import Rating from "../Rating/Rating";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../LoadingBox/LoadingBox";
import MessageBox from "../MessageBox/MessageBox";
import { productScreenAction } from "../../redux/productScreen/productScreenAction";

export default function ProductScreen() {
  const dispatch = useDispatch();
  // const productId = props.match.params.id;
  const { id } = useParams();
  // const product = data.products.find((x) => x._id === id);
  // if (!product) {

  //     return <div>Product Not Found</div>
  // }

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  console.log(productDetails);

  useEffect(() => {
    dispatch(productScreenAction(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back to result</Link>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={product.image} alt="{product.name}" />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReview}
                  />
                </li>
                <li>Price :${product.price}</li>
                <li>
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="primary block"> Add to Cart</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
