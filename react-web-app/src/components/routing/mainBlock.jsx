import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from './components/home';
import Contact from './components/contact';
import Careers from './components/careers';
import ProductDetails from './components/productDetails';
import SingleProductDetails from "./components/singleProductDetails";
import Contact1 from "./components/subComponents/Contact1";
import Contact2 from "./components/subComponents/contact2";
import Contact3 from "./components/subComponents/contact3";

export default function MainBlock() {
    var navigate = useNavigate();
    function handleCareerClick() {
        navigate('/careers');
    }
    return (
        <main>
            <div className="mainContainer">
                <div className="leftBlock">
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/pdetails">
                                    Product details
                                </Link>
                            </li>
                            <li>
                                <div onClick={handleCareerClick}>Career</div>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </nav>
                </div>
                <div className="rightBlock">
                   
                    <div className="container block">
                        
                        <Routes>
                            <Route path="/" element={<Home></Home>}></Route>
                            <Route path="/contact" element={<Contact></Contact>}>
                                <Route path="contact1" element={<Contact1/>}></Route>
                                <Route path="contact2" element={<Contact2/>}></Route>
                                <Route path="contact3" element={<Contact3/>}></Route>
                            </Route>
                            <Route path="/pdetails" element={<ProductDetails></ProductDetails>}></Route>
                            <Route path="/careers" element={<Careers></Careers>}></Route>
                            <Route path="/productDetails/:productId/:ratingCount" element={<SingleProductDetails />}></Route>
                       </Routes>
                    </div>
                </div>
            </div>
        </main>
    )
}