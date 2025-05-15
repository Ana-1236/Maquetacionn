// src/pages/DetalleProductoPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import WireFrameButton from '../components/FrameButton.jsx';
import sampleProducts from '../data/Instrumentos.js';

const descripcionesLargas = [
  "El acordeón es un instrumento de viento y fuelle muy popular en música folclórica. Produce sonidos al presionar teclas y mover el fuelle, creando melodías ricas y expresivas.",
  "El bajo eléctrico ofrece sonidos graves profundos que forman la base rítmica en muchos géneros musicales como rock, jazz y funk. Su construcción y técnica de interpretación son fundamentales para el groove.",
  "Las congas mini son tambores de percusión caribeña en un tamaño compacto, ideales para ritmos afro-latinos. Su sonido agudo y vibrante es clave en la música salsa y rumba.",
  "La flauta es un instrumento de viento que produce melodías suaves y dulces gracias a su cuerpo tubular y las diferentes posiciones de los dedos sobre sus agujeros.",
  "La guitarra es un instrumento versátil usado en múltiples géneros, con cuerdas que se pueden tocar con púa o dedos para producir acordes y solos memorables.",
  "El redoblante es un tambor pequeño usado para marcar la base rítmica en muchas canciones, conocido por su sonido agudo y penetrante."
];

const stocks = [10, 5, 8, 15, 8, 20]; // Cantidad en stock para cada producto

function DetalleProducto() {
  let { productoId } = useParams();
  const id = parseInt(productoId, 10) - 1;
  const productData = sampleProducts[id] || sampleProducts[0];
  const stock = stocks[id] !== undefined ? stocks[id] : 'N/A';

  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '2em', fontWeight: 'normal', marginBottom: '30px' }}>
        Detalle Producto
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '90%',
          maxWidth: '1000px',
          marginBottom: '50px',
          alignItems: 'flex-start',
          gap: '40px',
        }}
      >
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={productData.image}
            alt={`Imagen ${productData.name}`}
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              border: '2px solid black',
              marginBottom: '15px',
              objectFit: 'contain',
            }}
          />
        </div>
        <div style={{ flex: '1 1 400px', fontSize: '1em', lineHeight: '1.6' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.5em', fontWeight: 'bold' }}>{productData.name}</h2>
          <p style={{ fontSize: '1.4em', fontWeight: 'bold', color: '#000', margin: '10px 0 10px 0' }}>
            Precio: ${productData.price || 'N/A'}
          </p>
          <p style={{ fontSize: '1.2em', fontWeight: 'bold', margin: '0 0 20px 0' }}>
            Stock: {stock} unidades disponibles
          </p>
          <h3
            style={{
              fontSize: '1.1em',
              borderBottom: '1px solid #ccc',
              paddingBottom: '5px',
              marginBottom: '10px',
              fontWeight: 'normal',
            }}
          >
            Descripción
          </h3>
          <p style={{ fontSize: '0.95em' }}>
            {descripcionesLargas[id] || productData.summary}
          </p>
        </div>
      </div>
      <WireFrameButton
        to="/productos"
        style={{ padding: '8px 30px', border: '3px solid black', fontWeight: 'bold' }}
      >
        Listado productos
      </WireFrameButton>
    </div>
  );
}

export default DetalleProducto;
