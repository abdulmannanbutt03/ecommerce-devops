import React, { useState } from 'react';
import { FiShoppingCart, FiStar } from 'react-icons/fi';

const products = [
  { id: 1, name: 'ProWatch X1', category: 'Watches', price: 299, rating: 4.8, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80' },
  { id: 2, name: 'SmartWatch Ultra', category: 'Watches', price: 199, rating: 4.5, img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80' },
  { id: 3, name: 'Classic Timepiece', category: 'Watches', price: 399, rating: 4.9, img: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&q=80' },
  { id: 4, name: 'Sport Watch Pro', category: 'Watches', price: 149, rating: 4.3, img: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=400&q=80' },
  { id: 5, name: 'Luxury Gold Watch', category: 'Watches', price: 599, rating: 4.7, img: 'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=400&q=80' },
  { id: 6, name: 'Diver Watch 200m', category: 'Watches', price: 349, rating: 4.6, img: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&q=80' },
  { id: 7, name: 'NoisePro Headphones', category: 'Audio', price: 149, rating: 4.7, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80' },
  { id: 8, name: 'BassMax Earbuds', category: 'Audio', price: 79, rating: 4.3, img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80' },
  { id: 9, name: 'Studio Monitor Pro', category: 'Audio', price: 299, rating: 4.8, img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80' },
  { id: 10, name: 'Wireless Speaker X', category: 'Audio', price: 129, rating: 4.4, img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80' },
  { id: 11, name: 'Soundbar Elite', category: 'Audio', price: 249, rating: 4.6, img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&q=80' },
  { id: 12, name: 'Gaming Headset Z', category: 'Audio', price: 99, rating: 4.2, img: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400&q=80' },
  { id: 13, name: 'Galaxy Phone 15', category: 'Phones', price: 899, rating: 4.9, img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80' },
  { id: 14, name: 'Pixel Pro Max', category: 'Phones', price: 799, rating: 4.6, img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80' },
  { id: 15, name: 'iPhone Ultra', category: 'Phones', price: 1099, rating: 4.9, img: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&q=80' },
  { id: 16, name: 'OnePlus 12 Pro', category: 'Phones', price: 699, rating: 4.5, img: 'https://images.unsplash.com/photo-1574920162043-b872873f19bc?w=400&q=80' },
  { id: 17, name: 'Xiaomi 14 Ultra', category: 'Phones', price: 649, rating: 4.4, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80' },
  { id: 18, name: 'Fold Z6 Pro', category: 'Phones', price: 1299, rating: 4.7, img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&q=80' },
  { id: 19, name: 'Drone Mini 4K', category: 'Gadgets', price: 349, rating: 4.4, img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&q=80' },
  { id: 20, name: 'Portable Projector', category: 'Gadgets', price: 249, rating: 4.2, img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80' },
  { id: 21, name: 'MacBook Pro M4', category: 'Gadgets', price: 1999, rating: 4.9, img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80' },
  { id: 22, name: 'iPad Pro 13"', category: 'Gadgets', price: 1099, rating: 4.8, img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80' },
  { id: 23, name: 'Smart Camera 4K', category: 'Gadgets', price: 549, rating: 4.5, img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80' },
  { id: 24, name: 'VR Headset Pro', category: 'Gadgets', price: 449, rating: 4.3, img: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&q=80' },
];

const categories = ['All', 'Watches', 'Audio', 'Phones', 'Gadgets'];

export default function Products({ addToCart }) {
  const [active, setActive] = useState('All');
  const [added, setAdded] = useState(null);

  const filtered = active === 'All' ? products : products.filter(p => p.category === active);

  const handleAdd = (product) => {
    addToCart(product);
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1500);
  };

  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh', padding: '40px 2rem' }}>
      <h1 style={{ color: '#fff', fontSize: '32px', marginBottom: '8px' }}>All Products</h1>
      <p style={{ color: '#666', marginBottom: '32px' }}>Premium tech for every lifestyle</p>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActive(cat)} style={{
            padding: '8px 20px', borderRadius: '4px', border: 'none',
            cursor: 'pointer', fontWeight: '600', fontSize: '13px',
            background: active === cat ? '#6c63ff' : '#1a1a1a',
            color: active === cat ? '#fff' : '#aaa',
          }}>{cat}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
        {filtered.map(product => (
          <div key={product.id} style={{
            background: '#1a1a1a', border: '1px solid #222',
            borderRadius: '12px', overflow: 'hidden'
          }}>
            <img src={product.img} alt={product.name}
              style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '16px' }}>
              <p style={{ color: '#6c63ff', fontSize: '11px', marginBottom: '4px' }}>{product.category}</p>
              <h3 style={{ color: '#fff', fontSize: '15px', marginBottom: '8px' }}>{product.name}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
                <FiStar size={12} color="#f7971e" fill="#f7971e" />
                <span style={{ color: '#888', fontSize: '12px' }}>{product.rating}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#fff', fontWeight: '700', fontSize: '18px' }}>${product.price}</span>
                <button onClick={() => handleAdd(product)} style={{
                  background: added === product.id ? '#43e97b' : '#6c63ff',
                  color: '#fff', border: 'none', borderRadius: '4px',
                  padding: '8px 12px', cursor: 'pointer', display: 'flex',
                  alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600'
                }}>
                  <FiShoppingCart size={14} />
                  {added === product.id ? 'Added!' : 'Add'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}