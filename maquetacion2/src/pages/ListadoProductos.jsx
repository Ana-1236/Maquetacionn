// src/pages/ListadoProductosPage.jsx
import React from 'react';
import WireFrameButton from '../components/FrameButton.jsx';
import { RxFontBold } from 'react-icons/rx';

const svgPlaceholder = (width, height, bgColor = '#EEEEEE', borderColor = '#CCCCCC', text = '') => {
  const fontSize = Math.min(width, height) * (text.length > 5 ? 0.2 : 0.3); // Ajuste de fuente
  const svgText = text ? `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="${fontSize}" fill="#555">${text}</text>` : '';
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent( `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="${bgColor}" stroke="${borderColor}" stroke-width="1"/>${svgText}</svg>` )}`;
};

const sampleProducts = [
  { name: "Laptop Pro X", summary: "Alto rendimiento, pantalla 15\"." },
  { name: "Smartphone Z", summary: "Cámara 48MP, batería larga duración." },
  { name: "Teclado Mecánico K", summary: "Switches rojos, RGB configurable." },
  { name: "Monitor Curvo 27\"", summary: "144Hz, ideal para gaming." },
  { name: "Auriculares BT Noise Cancelling", summary: "Sonido inmersivo, 20h batería." },
  { name: "Webcam HD 1080p", summary: "Micrófono incorporado, USB-C." },
];

function ListadoProductos() {
  return (
    <div style={{ padding: '30px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginBottom: '40px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {sampleProducts.map((productData, index) => (
          <div key={index} style={{ border: '2px solid black', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '20px', textAlign: 'center', borderRadius: '10px'}}>
            <img
              src={svgPlaceholder(80, 80, '#EEEEEE', '#ccc', `Prod ${index + 1}`)}
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
        <WireFrameButton to="/" style={{ padding: '8px 30px', border: '3px solid black', fontWeight: 'bold'}}>Home</WireFrameButton>
      </div>
    </div>
  );
}
export default ListadoProductos;