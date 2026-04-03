import { Route, Routes } from 'react-router-dom';
import HomePage from '../homePage/homepage';
import ProductDetails from '../productDetails/productDetails';
import ViewCart from '../viewCart/viewCart';
import ProtectedRoute from '../protectedRoutes/protectedRoute';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Header() {
    var config = {
        headers: {
              'Content-Type': 'application/json',
          },
          withCredentials: true, // This ensures cookies are sent
      };
    const [userLoggedIn, setUserLoggedIn] = useState(true);
    useEffect(() => {
        axios.post('http://localhost:3000/get/userSessionDetails', {}, config).then((response) => {
            console.log("session deails");
            console.log(response.data);
            if (response.data.isUserLoggedIn) {
                setUserLoggedIn(true);
            } else {
                setUserLoggedIn(false);
            }
        })  
    }, []);
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/productDetails" element={
                    <ProtectedRoute isAuthenticated={userLoggedIn}  >
                        <ProductDetails></ProductDetails>
                    </ProtectedRoute>
                }></Route>
                <Route path="/viewCart" element={<ViewCart></ViewCart>}></Route>
            </Routes>            
        </div>
    )
}