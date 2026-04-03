import React from 'react';
import './homePage.css';

const HomePage = () => {
  const products = [
    { id: 1, name: 'Premium Wireless Headphones', price: '$299', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
    { id: 2, name: 'Minimalist Smart Watch', price: '$199', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
    { id: 3, name: 'Eco-Friendly Water Bottle', price: '$35', image: 'https://images.unsplash.com/photo-1602143302723-6399182192d7?w=500' },
    { id: 4, name: 'Leather Weekend Bag', price: '$150', image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500' },
  ];

  return (
    <div className="bg-light min-vh-100">
      {/* 1. Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-3 fw-bold mb-4">
                Style Meets <span className="text-info">Convenience.</span>
              </h1>
              <p className="lead mb-4 opacity-75">
                Discover the latest trends in tech and fashion. Get up to 40% off on your first order.
              </p>
              <button className="btn btn-light btn-lg rounded-pill px-4 fw-bold">
                Shop New Arrivals
              </button>
            </div>
            <div className="col-lg-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600" 
                alt="Featured Product" 
                className="img-fluid rounded-4 shadow-lg rotate-custom"
                style={{ transform: 'rotate(3deg)', maxWidth: '80%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Categories */}
      <section className="container py-5">
        <h2 className="h4 fw-bold mb-4">Shop by Category</h2>
        <div className="row g-3">
          {['Electronics', 'Fashion', 'Home Decor', 'Accessories'].map((cat) => (
            <div key={cat} className="col-6 col-md-3">
              <div className="card border-0 shadow-sm py-4 text-center hover-lift cursor-pointer">
                <div className="card-body fw-bold text-secondary">{cat}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Product Grid */}
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 className="fw-bold mb-0">Trending Now</h2>
            <p className="text-muted mb-0">The most popular items this week.</p>
          </div>
          <a href="#" className="text-primary fw-bold text-decoration-none">View All</a>
        </div>

        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-sm-6 col-lg-3">
              <div className="card border-0 bg-transparent h-100 product-card">
                <div className="position-relative overflow-hidden rounded-3">
                  <img 
                    src={product.image} 
                    className="card-img-top object-fit-cover" 
                    alt={product.name}
                    style={{ aspectRatio: '1/1' }}
                  />
                  <button className="btn btn-white position-absolute bottom-0 end-0 m-3 shadow-sm rounded-circle d-none d-lg-block cart-hover-btn">
                    🛒
                  </button>
                </div>
                <div className="card-body px-0">
                  <h5 className="card-title h6 mb-1 text-truncate">{product.name}</h5>
                  <p className="card-text fw-bold text-dark">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Small custom CSS for things Bootstrap doesn't handle natively */}
      <style>{`
        .hover-lift { transition: transform 0.2s; cursor: pointer; }
        .hover-lift:hover { transform: translateY(-5px); }
        .product-card img { transition: transform 0.3s; }
        .product-card:hover img { transform: scale(1.05); }
        .cart-hover-btn { opacity: 0; transition: opacity 0.3s; }
        .product-card:hover .cart-hover-btn { opacity: 1; }
        .cursor-pointer { cursor: pointer; }
      `}</style>
    </div>
  );
};

export default HomePage;