import React from 'react';

function GoodsCard(props) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      textAlign: 'center',
      width: '200px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      margin: '10px'
    }}>
      <img src={props.image} alt={props.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
      <h3 style={{ margin: '10px 0 5px', fontSize: '18px' }}>{props.name}</h3>
      <p style={{ margin: 0, fontWeight: 'bold', color: '#28a745' }}>Ціна: {props.price} грн</p>
    </div>
  );
}

export default GoodsCard;