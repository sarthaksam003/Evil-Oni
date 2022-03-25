import React, { useEffect, useState, useContext } from "react";
import CarouselThumbs from "./CarouselThumbs";
import "./Product.css";
import { useParams, Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import CartContext from "../../store/cart-context";

const Product = (props) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [sizeIsValid, setSizeIsValid] = useState(false);

  let params = useParams();
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Evil Oni - ${product.productName}`;
    // eslint-disable-next-line
  }, []);

  const product = props.ProductArray.find((item) => {
    return item.id === params.id;
  });

  const getSize = (e) => {
    if (e.target.id !== "") {
      setSelectedSize(e.target.id);
      setSizeIsValid(true);
    } else {
      return;
    }
  };
  const submitToCartHandler = () => {
    if (selectedSize === "") {
      setSizeIsValid(false);
      return;
    }
    cartCtx.addItem({
      id: product.id + selectedSize,
      img: product.productF,
      name: product.productName,
      price: product.productPrice,
      quantity: selectedQuantity,
      size: selectedSize,
    });
  };

  return (
    <React.Fragment>
      <div className="product-layout">
        <div className="container flexing">
          <div className="carousel">
            <CarouselThumbs
              product1b={product.productB}
              product1f={product.productF}
              product1m={product.productM}
            />
          </div>
          <div className="product-specs">
            <h1 className="product-specs-heading">
              {product.productName}
              <hr style={{ width: "40vw" }} />
            </h1>
            <div className="product-specs-desc">
              Product Details
              <ul>
                <li>{product.productDesc[0]}</li>
                <li>{product.productDesc[1]}</li>
                <li>{product.productDesc[2]}</li>
                <li>{product.productDesc[3]}</li>
              </ul>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <p className="product-specs-desc-cost">
                  ₹ {product.productPrice}
                </p>
                <label className="product-specs-desc-quantity">
                  Quantity:
                  {selectedQuantity}
                  <FiIcons.FiPlusCircle
                    id="add"
                    onClick={() => {
                      if (selectedQuantity < 9) {
                        setSelectedQuantity(selectedQuantity + 1);
                      }
                    }}
                  />
                  <FiIcons.FiMinusCircle
                    id="remove"
                    onClick={() => {
                      if (selectedQuantity > 1) {
                        setSelectedQuantity(selectedQuantity - 1);
                      }
                    }}
                  />
                </label>
              </div>
              <div className="sizes">
                <p className="product-specs-desc-size">Please Select size</p>
                <div className="size-circles">
                  <label>
                    <input
                      type="radio"
                      name="size"
                      onClick={getSize}
                      id="S"
                      style={{ cursor: "pointer" }}
                    />
                    <span
                      style={{
                        right: "2.2rem",
                        top: "-0.8rem",
                        cursor: "pointer",
                      }}
                    >
                      S
                    </span>
                  </label>
                </div>
                <div className="size-circles">
                  <label>
                    <input
                      type="radio"
                      name="size"
                      onClick={getSize}
                      id="M"
                      style={{ cursor: "pointer" }}
                    />
                    <span
                      style={{
                        right: "2.24rem",
                        top: "-0.8rem",
                        cursor: "pointer",
                      }}
                    >
                      M
                    </span>
                  </label>
                </div>
                <div className="size-circles">
                  <label>
                    <input
                      type="radio"
                      name="size"
                      onClick={getSize}
                      id="L"
                      style={{ cursor: "pointer" }}
                    />
                    <span
                      style={{
                        right: "2.2rem",
                        top: "-0.8rem",
                        cursor: "pointer",
                      }}
                    >
                      L
                    </span>
                  </label>
                </div>
                <div className="size-circles">
                  <label>
                    <input
                      type="radio"
                      name="size"
                      onClick={getSize}
                      id="XL"
                      style={{ cursor: "pointer" }}
                    />
                    <span
                      style={{
                        right: "2.3rem",
                        top: "-0.8rem",
                        cursor: "pointer",
                      }}
                    >
                      XL
                    </span>
                  </label>
                </div>
                <div className="size-circles">
                  <label>
                    <input
                      type="radio"
                      name="size"
                      onClick={getSize}
                      id="XXL"
                      style={{ cursor: "pointer" }}
                    />
                    <span
                      style={{
                        right: "2.5rem",
                        top: "-0.8rem",
                        cursor: "pointer",
                      }}
                    >
                      XXL
                    </span>
                  </label>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "2rem",
                }}
              >
                <Link
                  to="/size-chart"
                  className="link-to-size-chart"
                  style={{ textDecoration: "none" }}
                >
                  <p style={{ marginTop: "2rem" }}>Refer to our size chart</p>
                </Link>
                <div className="action submit">
                  <button
                    className="add-to-cart-text"
                    onClick={submitToCartHandler}
                    disabled={!sizeIsValid}
                  >
                    <p>
                      <FaIcons.FaCartPlus />
                    </p>
                    <p>ADD TO CART</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
