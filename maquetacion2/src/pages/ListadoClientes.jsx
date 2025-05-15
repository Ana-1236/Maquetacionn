// src/pages/ListadoClientesPage.jsx
import React from 'react';
import WireFrameButton from '../components/FrameButton.jsx';

const sampleClients = [
  { name: "Ana García", summary: "Cliente frecuente, última compra hace 1 semana.", gender: "female" },
  { name: "Luis Martínez", summary: "Nuevo cliente, primera compra realizada.", gender: "male" },
  { name: "Carlos Rodríguez", summary: "Cliente VIP, alto volumen de compras.", gender: "male" },
  { name: "Sofía Hernández", summary: "Interesada en categoría X, contactar.", gender: "female" },
  { name: "Javier López", summary: "Requiere soporte técnico.", gender: "male" },
  { name: "Laura Gómez", summary: "Activa desde 2022, cumpleaños próximo.", gender: "female" },
];

const svgAvatarPlaceholder = (width, height, bgColor = '#EFEFEF', borderColor = '#CCC', text = 'Avatar') => {
  const svgText = text ? `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="${Math.min(width, height) * 0.3}" fill="#555">${text}</text>` : '';
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="${bgColor}" stroke="${borderColor}" stroke-width="1"/><circle cx="50%" cy="50%" r="40%" fill="rgba(0,0,0,0.05)" /><circle cx="50%" cy="35%" r="15%" fill="rgba(0,0,0,0.1)" /><ellipse cx="50%" cy="80%" rx="25%" ry="15%" fill="rgba(0,0,0,0.1)" />${svgText}</svg>`)}`;
};


function ListadoClientes() {
  return (
    <div style={{ padding: '30px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginBottom: '40px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {sampleClients.map((clientData, index) => (
          <div key={index} style={{ border: '2px solid black', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '20px', textAlign: 'center', borderRadius: '10px'}}>
            <img
              src={`https://xsgames.co/randomusers/avatar.php?g=${clientData.gender}&key=client${index}`}
              alt={`Avatar ${clientData.name}`}
              style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px', border: '1px solid #ccc', backgroundColor: '#eee' }}
              loading="lazy"
              onError={(e) => { e.target.src = svgAvatarPlaceholder(60, 60); e.target.onerror = null; }}
            />
            <div style={{ flexGrow: 1 }}>
              <p style={{ fontSize: '1em', fontWeight: 'bold', margin: '0 0 5px 0' }}>{clientData.name}</p>
              <p style={{ fontSize: '0.85em', color: '#444', margin: 0 }}>{clientData.summary}</p>
            </div>
            <WireFrameButton to={`/cliente-detalle/${index + 1}`} style={{ padding: '8px 30px', marginTop: '15px', border: '3px solid black', fontWeight: 'bold' }}>Ver</WireFrameButton>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'right' }}>
        <WireFrameButton to="/" style={{ padding: '8px 30px', border: '3px solid black', fontWeight: 'bold' }}>Home</WireFrameButton>
      </div>
    </div>
  );
}
export default ListadoClientes;