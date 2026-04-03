import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {incrementCart} from '../../redux-state/slice';



type CartDetails = {
    count:number;
}

export default function ProductDetails() {
    const [productDetails, setSetProductDetails] = useState([]);
    const [cartDetails, setCartDetails] = useState({});
    var cartDetailsFromStore:any = useSelector((state) => state); 

    var dispatcher = useDispatch();
    useEffect(() => {
      const config = {
          headers: {
              'Content-Type': 'application/json',
          },
          withCredentials: true, // This ensures cookies are sent
      };
        var dataurl = 'http://localhost:3000/get/product/details';
        // var dataurl = "http://sit.010web.io/get/product/details";
        
        axios.post(dataurl, {}, config).then((response) => {
            
            setSetProductDetails(response.data.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    function handleAddToCart(productId: any) {
        dispatcher(incrementCart({'productId': productId}));
    }
    
    return (
       <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
       
      {productDetails.map((product) => (
        <div
          key={product._id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
              marginBottom: "12px",
            }}
          />
          <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>
            {product.title}
          </h3>
          <p style={{ fontSize: "14px", color: "#555", marginBottom: "12px" }}>
            {product.description}
          </p>
          <p style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "8px" }}>
            Category: <span style={{ color: "#007bff" }}>{product.category}</span>
          </p>
          <p style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "8px" }}>
            ${product.price}
          </p>
          <p style={{ fontSize: "14px", color: "#777" }}>
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <button
            onClick={() => {handleAddToCart(product.id)}}
            style={{
              marginTop: "12px",
              padding: "10px 16px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
    )
}