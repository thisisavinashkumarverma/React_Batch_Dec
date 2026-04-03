
import './header.css';
import {Button, Form, Modal} from 'react-bootstrap';
import { useState } from 'react';
import {useAxiosApi} from '../common/customHooks';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

type UserCredentialModal = {
  mailid: string;
  password: string;
}

const Header = () => {
    const [invalidCredentails, setInvalidCredentails] = useState(false);
    const { response, error, loading, axiosFetch } = useAxiosApi();
    const [userName, setUserName] = useState('');
    const [showLogout, setLogoutShow] = useState(false);
    const [showLogoutModel, setShowLogoutModel] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLogoutShow = () => {setLogoutShow(true); setShowLogoutModel(true)};
    const [mailid, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const cartDetails = useSelector((state:any) => state.cartCounter.cartDetails);

    const handleLogoutSession = () => {
      const config = {
          headers: {
              'Content-Type': 'application/json',
          },
          withCredentials: true, // This ensures cookies are sent
      };
        setShowLogoutModel(false);
        axios.post('http://localhost:3000/logoutSession', {}, config).then((response) => {
          setLogoutShow(false);
          navigate('/');
        });
    }

    let handleSubmit = async (event:any) => {
        event.preventDefault();
        var userDetails:UserCredentialModal = {mailid, password};
        // var response = await axiosFetch({
        //     axiosInstance: axios,
        //     method: 'POST',
        //     url: 'http://localhost:3000/validate/userCredentials',
        //     reqConfig: {
        //       data: userDetails
        //     }
        // });
        const config = {
          headers: {
              'Content-Type': 'application/json',
          },
          withCredentials: true, // This ensures cookies are sent
      };

        axios.post('http://localhost:3000/validate/userCredentials', userDetails, config ).then((response) => {
          if (response.data.msg == 'Valid Credentials') {
          handleClose();
          setInvalidCredentails(false);
          // load product details...
          navigate('/productDetails');
          setLogoutShow(true);
        } else {
          setInvalidCredentails(true);
        }
        }).catch((error) => {
          console.error('Error during login:', error);
        });

        
        
    }
  return (
    <header>
      {/* Primary Top Nav */}
      <nav className="navbar navbar-expand-lg navbar-dark p-0" style={{ backgroundColor: '#131921' }}>
        <div className="container-fluid py-1 px-3">
          
          {/* 1. Logo */}
          <a className="navbar-brand d-flex align-items-center me-2 border border-transparent hover-border-white p-2" href="#">
            <span className="fw-bold fs-4 text-white">amazon</span>
            <small className="text-warning pt-2">.in</small>
          </a>

          {/* 2. Deliver To (Hidden on mobile) */}
          <div className="nav-link text-white d-none d-xl-block me-3 p-2 border border-transparent hover-border-white cursor-pointer">
            <div className="d-flex align-items-center">
              <span className="me-1">📍</span>
              <div>
                <small className="d-block text-secondary text-white-50" style={{ fontSize: '12px' }}>Deliver to</small>
                <span className="fw-bold d-block" style={{ fontSize: '14px' }}>India</span>
              </div>
            </div>
          </div>

          {/* 3. Search Bar */}
          <div className="d-flex flex-grow-1 mx-2 my-2 my-lg-0">
            <div className="input-group">
              <button className="btn btn-light dropdown-toggle d-none d-md-block text-dark border-end" type="button" style={{ backgroundColor: '#e6e6e6', fontSize: '14px' }}>
                All
              </button>
              <input 
                type="text" 
                className="form-control border-0 shadow-none" 
                placeholder="Search Amazon.in" 
              />
              <button className="btn btn-warning border-0 px-3" type="button" style={{ backgroundColor: '#febd69' }}>
                <span className="fs-5 text-dark">🔍</span>
              </button>
            </div>
          </div>

          {/* 4. Right Side Navigation */}
          <div className="d-flex align-items-center ms-lg-3">
            
            {/* Language Selection (Desktop) */}
            <div className="nav-link text-white d-none d-md-block p-2 border border-transparent hover-border-white">
              <span className="fw-bold" style={{ fontSize: '14px' }}>EN 🌐</span>
            </div>

            { !showLogout ?    
               
                <div className="nav-link text-white p-2 border border-transparent hover-border-white cursor-pointer" onClick={handleShow}>
                  <small className="d-block text-white-50" style={{ fontSize: '12px' }}>Hello, sign in</small>
                  <span className="fw-bold d-block" style={{ fontSize: '14px' }}>Account & Lists</span>
                </div> 

              :
                
                <div className="nav-link text-white p-2 border border-transparent hover-border-white cursor-pointer" onClick={handleLogoutShow}>
                  <small className="d-block text-white-50" style={{ fontSize: '12px' }}>Hello, {userName}</small>
                  <span className="fw-bold d-block" style={{ fontSize: '14px' }}>Logout</span>
                </div>

            }
           

             

            {/* Returns & Orders */}
            <div className="nav-link text-white d-none d-sm-block p-2 border border-transparent hover-border-white cursor-pointer">
              <small className="d-block text-white-50" style={{ fontSize: '12px' }}>Returns</small>
              <span className="fw-bold d-block" style={{ fontSize: '14px' }}>& Orders</span>
            </div>

            {/* Cart */}
            <Link to="/viewCart">
            <a href="#" className="nav-link text-white d-flex align-items-end p-2 border border-transparent hover-border-white text-decoration-none">
              <div className="position-relative d-inline-block me-1">
                <span className="fs-3">🛒</span>
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark text-warning fw-bold" style={{ fontSize: '14px' }}>
                  {cartDetails.totalNoOfItemsInCart}
                </span>
              </div>
              <span className="fw-bold pb-1" style={{ fontSize: '14px' }}>Cart</span>
            </a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Secondary Bottom Nav (Categories) */}
      <div className="navbar navbar-dark p-0" style={{ backgroundColor: '#232f3e' }}>
        <div className="container-fluid py-1 px-3 d-flex justify-content-start overflow-auto">
          <button className="btn btn-sm text-white fw-bold d-flex align-items-center me-3 border border-transparent hover-border-white">
            <span className="fs-5 me-1">☰</span> All
          </button>
          <div className="d-flex align-items-center text-white gap-3" style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>
            <span className="cursor-pointer p-1 border border-transparent hover-border-white">Fresh</span>
            <span className="cursor-pointer p-1 border border-transparent hover-border-white">Amazon miniTV</span>
            <span className="cursor-pointer p-1 border border-transparent hover-border-white">Sell</span>
            <span className="cursor-pointer p-1 border border-transparent hover-border-white">Best Sellers</span>
            <span className="cursor-pointer p-1 border border-transparent hover-border-white">Mobiles</span>
            <span className="cursor-pointer p-1 border border-transparent hover-border-white">Electronics</span>
            <span className="cursor-pointer p-1 border border-transparent hover-border-white">Prime</span>
            <span className="cursor-pointer p-1 border border-transparent hover-border-white">New Releases</span>
          </div>
        </div>
      </div>

        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Email */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={mailid}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {/* Remember Me */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="success" type="submit" className="w-100">
              Login
            </Button>
          </Form>
          {invalidCredentails.toString()}
          {
            invalidCredentails && <div>Invlaid credentials</div>
          }
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

       <Modal show={showLogoutModel} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Would you like to logout ?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleLogoutSession}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>


    </header>
  );
};

export default Header;