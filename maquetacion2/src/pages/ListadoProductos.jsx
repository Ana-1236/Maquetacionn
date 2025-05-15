// src/pages/ListadoProductosPage.jsx
import React from 'react';
import WireFrameButton from '../components/FrameButton.jsx';
import sampleProducts from '../data/Instrumentos.js'; // <- Importa desde el archivo nuevo

function ListadoProductos() {
  return (
    <div style={{ padding: '30px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginBottom: '40px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {sampleProducts.map((productData, index) => (
          <div key={index} style={{ border: '2px solid black', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
            <img
              src={productData.image}
              alt={`Miniatura ${productData.name}`}
              style={{ width: '80px', height: '80px', objectFit: 'cover', marginBottom: '15px', border: '1px solid #ccc' }}
            />
            <div style={{ flexGrow: 1 }}>
              <p style={{ fontSize: '1em', fontWeight: 'bold', margin: '0 0 5px 0' }}>{productData.name}</p>
              <p style={{ fontSize: '0.85em', color: '#444', margin: 0 }}>{productData.summary}</p>
            </div>
            <WireFrameButton to={`/producto-detalle/${index + 1}`} style={{ padding: '8px 30px', marginTop: '15px', border: '3px solid black', fontWeight: 'bold' }}>Ver</WireFrameButton>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'right' }}>
        <WireFrameButton to="/" style={{ padding: '8px 30px', border: '3px solid black', fontWeight: 'bold' }}>Home</WireFrameButton>
      </div>
    </div>
  );
}

export default ListadoProductos;
