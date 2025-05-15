// src/pages/ListadoClientesPage.jsx
import React from 'react';
import ana from '../assets/avatars/ana.jpg'
import carlos from '../assets/avatars/carlos.jpg'
import kelly from '../assets/avatars/kelly.jpg'
import laura from '../assets/avatars/laura.jpg'
import luis from '../assets/avatars/luis.jpg'
import maria from '../assets/avatars/maria.jpg'
import WireFrameButton from '../components/FrameButton.jsx';


const sampleClients = [
  { name: "Ana García", summary: "Participa activamente en promociones y eventos especiales." },
  { name: "Luis Martínez", summary: "Recomendado por amigos, muestra gran interés en nuevos lanzamientos." },
  { name: "Carlos Rodríguez", summary: "Solicita cotizaciones frecuentes para compras al por mayor." },
  { name: "Maria Hernández", summary: "Ha dejado comentarios positivos en nuestras redes sociales." },
  { name: "Kelly López", summary: "Ha reportado problemas con entregas anteriores, pendiente seguimiento." },
  { name: "Laura Gómez", summary: "Cliente con historial de devoluciones, atención personalizada requerida." },
];

const avatarImages = [ana, luis, carlos, maria, kelly, laura];

function ListadoClientes() {
  return (
    <div style={{ padding: '30px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '40px' }}>
        {sampleClients.map((clientData, index) => (
          <div key={index} style={{ border: '2px solid black', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '20px', textAlign: 'center', borderRadius: '10px'}}>
            <img
              src={avatarImages[index]}
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