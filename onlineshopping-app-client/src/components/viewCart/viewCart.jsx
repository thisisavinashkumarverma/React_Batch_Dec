
import axios from 'axios';
import React, { useEffect } from 'react';
import{useSelector, useDispatch} from 'react-redux';
import {decrementCart, incrementCart} from '../../redux-state/slice';
export default function ViewCart() {
    const cartDetails = useSelector((state) => state.cartCounter.cartDetails);
    const [products, setProducts] = React.useState([]);
    const[totalPrice, setTotalPrice] = React.useState(0);   
    var dispatcher = useDispatch();
    
    useEffect(() => {
        var productIds = Object.keys(cartDetails);
        productIds.pop(); // Remove the last element which is  'totalNoOfItemsInCart' 
        axios.post('http://localhost:3000/api/products/getProductsByIds', { productIds })
            .then(response => {
                var responseProductDetails = response.data.data;
                responseProductDetails.map((product) => {
                    product.quantity = cartDetails[product.id].count;});
              

                setProducts(responseProductDetails);
            })
            .catch(error => {
                console.error('Error fetching product details for cart:', error);
            });
    }, [cartDetails]);

    function onRemove(productId) {
        dispatcher(decrementCart({productId}));
    }
    function onUpdateQuantity(productId, type ) {
        if (type === 'increment') {
            dispatcher(incrementCart({productId}));
        } else if (type === 'decrement') {
            dispatcher(decrementCart({productId, isProductCountDecrement: true}));
        }
    }
    return (
     <div className="container my-4">
      <h2 className="mb-4">🛒 Cart</h2>
      {products.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.image}
                    className="card-img-top p-3"
                    alt={product.title}
                    style={{ height: "160px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title">{product.title}</h6>
                    <p className="card-text mb-1">
                      <strong>Price:</strong> ₹{product.price}
                    </p>
                    <p className="card-text text-muted small flex-grow-1">
                      {product.description.slice(0, 60)}...
                    </p>

                    {/* Quantity controls */}
                    <div className="d-flex align-items-center mb-2">
                      <button
                        className="btn btn-outline-secondary btn-sm me-2"
                        onClick={() =>
                          onUpdateQuantity(product.id, 'decrement')
                        }
                        disabled={product.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm ms-2"
                        onClick={() =>
                          onUpdateQuantity(product.id, 'increment')
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="btn btn-danger mt-auto"
                      onClick={() => onRemove(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart summary */}
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Cart Summary</h5>
              <p className="card-text">
                <strong>Total Price:</strong> ₹{totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </>
      )}
    </div>    )
}



