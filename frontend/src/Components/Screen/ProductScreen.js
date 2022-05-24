import React, { useEffect, useState } from "react";
// import data from "../Data/data";
import Rating from "../Rating/Rating";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../LoadingBox/LoadingBox";
import MessageBox from "../MessageBox/MessageBox";
import { productScreenAction } from "../../redux/productScreen/productScreenAction";

export default function ProductScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [qty, setQty] = useState(1);

  // const productId = props.match.params.id;
  // const product = data.products.find((x) => x._id === id);
  // if (!product) {

  //     return <div>Product Not Found</div>
  // }

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  // console.log(productDetails);

  useEffect(() => {
    dispatch(productScreenAction(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

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
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                  {/* <li>
                    <button className="primary block">Add to Cart</button>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
