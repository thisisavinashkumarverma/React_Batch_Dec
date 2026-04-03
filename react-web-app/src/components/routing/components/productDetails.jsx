import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductDetails() {
    const [productDetails, setProductDetails] = useState([]);
    var dataUrl = 'https://fakestoreapi.com/products'
    useEffect(() => {
        axios.get(dataUrl).then((res) => {
            setProductDetails(res.data)
        })
        return (() => {
            console.log("Product Details comp got unmounted")
        })
    }, [dataUrl])
    return (
        <ul className="detailsContainer">
            {
                productDetails.map((details) => (
                    <ul className="block">
                        <li>
                            <img src={details.image} alt="" />
                        </li>
                        <li>Product Name - {details.title}</li>
                        <li>Price - {details.price}</li>
                        <li>Description - {details.description}</li>
                        <li>
                            <Link to={'/productDetails/' + details.id + '/' + details.rating.count }>
                                <button className="btn btn-primary">View Details</button>
                            </Link>
                        </li>
                    </ul>
                ))
            }
        </ul>
    )
}