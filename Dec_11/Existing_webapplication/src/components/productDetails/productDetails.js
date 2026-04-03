import '././products.css';
export default function ProductDetails() {

    var details = {
        name: "Mobile",
        price: "5000",
        manuf: "Sony",
        rating: "4/5"
    }

    return (
        <div>
            <h2>Product Details Component</h2>
            <ul>
                <li>
                    <label>Product Name:</label> {details.name}
                </li>
                <li>
                    <label>Product Price:</label> {details.price}
                </li>
                <li>
                    <label>Product Manufacturer:</label> {details.manuf}
                </li>
                <li>
                    <label>Product Rating:</label> {details.rating}
                </li>
                
            </ul>
            <p>
                <div>The sum of two values is {20 + 40}</div>
            </p>
        </div>
    )
}