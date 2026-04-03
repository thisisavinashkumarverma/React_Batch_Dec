import axios from "axios"
import { useEffect, useState } from "react"
import './productDetails.css';
import RatingStars from "./common/ratingStars";

export default function ProductDetails() {
    const [productDetails, setProductDetails] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            console.log("response");
            // debugger;
            console.log(response)
            setProductDetails(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <div className="productDetailsContainer">
            {
                productDetails.map((product, index) => (
                    <div className="card" key={index}>
                        <img src={product.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div>
                                <RatingStars rating={product.rating.rate}>
                                    Rating {index} - 
                                </RatingStars>
                            </div>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}