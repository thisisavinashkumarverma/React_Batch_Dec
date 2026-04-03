import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleProductDetails() {
    var {productId} = useParams();
    const [productData, setProductData] = useState({});
    var apiUrl = 'https://fakestoreapi.com/products/' + productId;
    useEffect(() => {
        axios.get(apiUrl).then((res) => {
            setProductData(res.data);
        })
    }, [apiUrl]);
    console.log(productId);
    return (
        <div>
            <ul>
                {
                    Object.keys(productData).map((key) => (
                        typeof(productData[key]) != 'object' &&
                            <li>{key} - {productData[key]}</li>
                    ))
                }
            </ul>
            <Link to="/pdetails">Back</Link>
        </div>
    )
}