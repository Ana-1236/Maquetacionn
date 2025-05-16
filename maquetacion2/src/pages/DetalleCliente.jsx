// src/pages/DetalleClientePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import WireFrameButton from '../components/FrameButton.jsx';

import ana from '../assets/avatars/ana.jpg'
import carlos from '../assets/avatars/carlos.jpg'
import kelly from '../assets/avatars/kelly.jpg'
import laura from '../assets/avatars/laura.jpg'
import luis from '../assets/avatars/luis.jpg'
import maria from '../assets/avatars/maria.jpg'

const getClientData = (id) => {
  const baseId = parseInt(id, 10) || 1;
  const names = ["Ana García", "Luis Martínez", "Carlos Rodríguez", "Maria Hernández", "Kelly López", "Laura Gómez"];
  const genders = ["female", "male", "male", "female", "male", "female"];
  const emails = ["ana.g45@gmail.com.com", "luism05@gmail.com", "carlos.r89@gmail.com", "maria.h735@gmail.com", "kelly.l475@gmail.com", "laura.g410@gmail.com"];
  const phones = ["3156845975", "3225789654", "3185974021", "3402597410", "3254012975", "3904782130"];
  const regDates = ["15/01/2025", "03/03/2025", "21/05/2025", "10/07/2024", "01/09/2024", "18/11/2024"];
  const historyItemsList = [
    ["Compra: Flauta - 10/05/2025", "Reclamo: Abolladura - 15/05/2025"],
    ["Compra: Redoblante - 15/05/2025", "Compra: Guitarra - 15/05/2025"],
    ["Compra: Guitarra electrica - 22/03/2025", "Seguimiento: Consulta por nuevos colores - 24/03/2025"],
    ["Compra: Acordeon - 01/04/2025"],
    ["Compra: Congas mini - 15/03/2025", "Revisión: Descuento aplicado incorrectamente - 16/03/2025"],
    ["Compra: Guitarra eléctrica - 18/02/2025", "Compra: Congas mini - 20/02/2025"]
  ];
  const highlights = [
    "Participa activamente en promociones y eventos especiales.",
    "Recomendado por amigos, muestra gran interés en nuevos instrumentos.",
    "Solicita cotizaciones frecuentes para compras al por mayor.",
    "Ha dejado comentarios positivos en nuestras redes sociales.",
    "Ha reportado problemas con entregas anteriores, pendiente seguimiento.",
    "Cliente con historial de devoluciones, atención personalizada requerida."

  ];
  const images = [ana, luis, carlos, maria, kelly, laura];

  const index = (baseId - 1 + names.length) % names.length;

  return {
    name: names[index],
    gender: genders[index],
    email: emails[index],
    phone: phones[index],
    regDate: regDates[index],
    historyItems: historyItemsList[index] || ["Sin historial registrado."],
    highlight: highlights[index] || "Información general del cliente.",
    image: images[index]
  };
};

const svgAvatarPlaceholder = (width, height, bgColor = '#DDDDDD', borderColor = '#666666', text = 'Perfil') => {
  const svgText = text ? `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="${Math.min(width, height) * 0.2}" fill="#555">${text}</text>` : '';
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="${bgColor}" stroke="${borderColor}" stroke-width="1"/><circle cx="50%" cy="50%" r="40%" fill="rgba(0,0,0,0.05)" /><circle cx="50%" cy="35%" r="15%" fill="rgba(0,0,0,0.1)" /><ellipse cx="50%" cy="80%" rx="25%" ry="15%" fill="rgba(0,0,0,0.1)" />${svgText}</svg>`
  )}`;
};

function DetalleCliente() {
  let { clienteId } = useParams();
  const clientData = getClientData(clienteId);

  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '2em', fontWeight: 'normal', marginBottom: '30px' }}>
        Detalle Cliente
      </h1>
      <div style={{ display: 'flex', width: '90%', maxWidth: '900px', marginBottom: '50px', alignItems: 'flex-start', gap: '40px' }}>
        <img
          src={clientData.image}
          alt={`Foto ${clientData.name}`}
          style={{ width: '250px', height: '250px', border: '2px solid black', borderRadius: '4px', objectFit: 'cover', flexShrink: 0, backgroundColor: '#eee' }}
          loading="lazy"
          onError={(e) => { e.target.src = svgAvatarPlaceholder(250, 250, '#DDDDDD', '#666', clientData.name.split(' ')[0]); e.target.onerror = null; }}
        />
        <div style={{ flexGrow: 1, fontSize: '1em', lineHeight: '1.6' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.3em', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '15px', fontWeight: 'normal' }}>
            Datos Básicos
          </h2>
          <p><strong>Nombre:</strong> {clientData.name}</p>
          <p><strong>Correo:</strong> {clientData.email}</p>
          <p><strong>Teléfono:</strong> {clientData.phone}</p>
          <p><strong>Fecha Registro:</strong> {clientData.regDate}</p>

          <h2 style={{ marginTop: '30px', fontSize: '1.3em', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '15px', fontWeight: 'normal' }}>
            Historial
          </h2>
          <ul style={{ paddingLeft: '20px', margin: 0, listStyleType: 'disc' }}>
            {clientData.historyItems.map((item, i) => (
              <li key={i} style={{ marginBottom: '5px' }}>{item}</li>
            ))}
          </ul>

          <div style={{ border: '2px dashed #888', padding: '15px', marginTop: '30px', backgroundColor: '#f9f9f9' }}>
            <h3 style={{ marginTop: 0, fontSize: '1.1em', fontWeight: 'bold', marginBottom: '10px' }}>
              Nota Destacada
            </h3>
            <p style={{ margin: 0, fontSize: '0.9em' }}>
              {clientData.highlight}
            </p>
          </div>
        </div>
      </div>
      <WireFrameButton to="/clientes" style={{ padding: '8px 30px', border: '3px solid black', fontWeight: 'bold' }}>Listado Clientes</WireFrameButton>
    </div>
  );
}

export default DetalleCliente;
