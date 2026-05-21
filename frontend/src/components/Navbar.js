import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiZap } from 'react-icons/fi';

export default function Navbar({ cartCount }) {
  return (
    <nav style={{
      background: '#0a0a0a',
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid #222'
    }}>
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <FiZap color="#6c63ff" size={22} />
        <span style={{ color: '#fff', fontSize: '20px', fontWeight: '700', letterSpacing: '1px' }}>NEXUS</span>
      </Link>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {['/', '/products', '/cart'].map((path, i) => (
          <Link key={i} to={path} style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>
            {['Home', 'Products', 'Cart'][i]}
          </Link>
        ))}
      </div>

      <Link to="/cart" style={{ position: 'relative', color: '#fff', textDecoration: 'none' }}>
        <FiShoppingCart size={22} />
        {cartCount > 0 && (
          <span style={{
            position: 'absolute', top: '-8px', right: '-8px',
            background: '#6c63ff', color: '#fff',
            borderRadius: '50%', width: '18px', height: '18px',
            fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>{cartCount}</span>
        )}
      </Link>
    </nav>
  );
}