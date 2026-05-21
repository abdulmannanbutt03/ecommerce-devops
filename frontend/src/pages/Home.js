import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiWatch, FiHeadphones, FiSmartphone, FiCpu } from 'react-icons/fi';

const categories = [
  { icon: <FiWatch size={28} />, name: 'Watches', color: '#6c63ff' },
  { icon: <FiHeadphones size={28} />, name: 'Audio', color: '#ff6584' },
  { icon: <FiSmartphone size={28} />, name: 'Phones', color: '#43e97b' },
  { icon: <FiCpu size={28} />, name: 'Gadgets', color: '#f7971e' },
];

export default function Home() {
  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh', color: '#fff' }}>

      <div style={{
        padding: '100px 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)',
      }}>
        <p style={{ color: '#6c63ff', fontSize: '13px', letterSpacing: '4px', marginBottom: '16px' }}>NEXT GEN TECH STORE</p>
        <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: 1.1, marginBottom: '20px' }}>
          Gear Up For<br /><span style={{ color: '#6c63ff' }}>The Future</span>
        </h1>
        <p style={{ color: '#888', fontSize: '18px', marginBottom: '40px' }}>
          Premium tech accessories, watches & gadgets
        </p>
        <Link to="/products" style={{
          background: '#6c63ff', color: '#fff',
          padding: '14px 36px', borderRadius: '4px',
          textDecoration: 'none', fontWeight: '600',
          fontSize: '15px', display: 'inline-flex',
          alignItems: 'center', gap: '8px'
        }}>
          Shop Now <FiArrowRight />
        </Link>
      </div>

      <div style={{ padding: '60px 2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '28px' }}>Shop By Category</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {categories.map((cat, i) => (
            <Link to="/products" key={i} style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#1a1a1a', border: '1px solid #222',
                borderRadius: '12px', padding: '30px 20px',
                textAlign: 'center', cursor: 'pointer',
              }}>
                <div style={{ color: cat.color, marginBottom: '12px' }}>{cat.icon}</div>
                <p style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div style={{
        margin: '0 2rem 60px',
        background: 'linear-gradient(135deg, #6c63ff, #a855f7)',
        borderRadius: '16px', padding: '60px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '32px', marginBottom: '12px' }}>New Arrivals 2026</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>Up to 30% off on selected items</p>
        <Link to="/products" style={{
          background: '#fff', color: '#6c63ff',
          padding: '12px 32px', borderRadius: '4px',
          textDecoration: 'none', fontWeight: '700'
        }}>Explore Now</Link>
      </div>

    </div>
  );
}