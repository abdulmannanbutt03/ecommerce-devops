import React, { useState } from 'react';
import { FiTrash2, FiCheckCircle } from 'react-icons/fi';

export default function Cart({ cart, removeFromCart }) {
  const [ordered, setOrdered] = useState(false);
  const total = cart.reduce((a, i) => a + i.price * i.qty, 0);

  if (ordered) return (
    <div style={{
      background: '#0f0f0f', minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', color: '#fff'
    }}>
      <FiCheckCircle size={64} color="#43e97b" />
      <h2 style={{ marginTop: '20px', fontSize: '28px' }}>Order Placed!</h2>
      <p style={{ color: '#888', marginTop: '8px' }}>Your order is confirmed. Thank you!</p>
    </div>
  );

  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh', padding: '40px 2rem' }}>
      <h1 style={{ color: '#fff', fontSize: '32px', marginBottom: '32px' }}>Your Cart</h1>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#666', marginTop: '80px' }}>
          <p style={{ fontSize: '48px' }}>🛒</p>
          <p style={{ marginTop: '16px', fontSize: '18px' }}>Cart is empty</p>
        </div>
      ) : (
        <div style={{ maxWidth: '700px' }}>
          {cart.map(item => (
            <div key={item.id} style={{
              background: '#1a1a1a', border: '1px solid #222',
              borderRadius: '12px', padding: '20px',
              display: 'flex', alignItems: 'center',
              gap: '20px', marginBottom: '16px'
            }}>
              <img src={item.img} alt={item.name}
                style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ color: '#fff', marginBottom: '4px' }}>{item.name}</h3>
                <p style={{ color: '#888', fontSize: '13px' }}>Qty: {item.qty}</p>
              </div>
              <span style={{ color: '#fff', fontWeight: '700', fontSize: '18px' }}>
                ${item.price * item.qty}
              </span>
              <button onClick={() => removeFromCart(item.id)} style={{
                background: 'transparent', border: 'none',
                color: '#ff6584', cursor: 'pointer'
              }}>
                <FiTrash2 size={18} />
              </button>
            </div>
          ))}

          <div style={{
            background: '#1a1a1a', border: '1px solid #333',
            borderRadius: '12px', padding: '24px', marginTop: '24px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span style={{ color: '#aaa', fontSize: '16px' }}>Total</span>
              <span style={{ color: '#fff', fontWeight: '700', fontSize: '24px' }}>${total}</span>
            </div>
            <button onClick={() => setOrdered(true)} style={{
              width: '100%', background: '#6c63ff', color: '#fff',
              border: 'none', borderRadius: '4px', padding: '14px',
              fontSize: '16px', fontWeight: '700', cursor: 'pointer'
            }}>
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}