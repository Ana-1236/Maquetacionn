// src/pages/HomePage.jsx
import React from 'react';
import { FaUsers, FaBoxOpen, FaChartLine, FaDollarSign } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import WireFrameButton from '../components/FrameButton.jsx';

const MetricCard = ({ title, value, icon, bg }) => (
  <div style={{
    flex: '1 1 200px',
    background: bg || '#f5f5f5',
    color: '#333',
    margin: '10px',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    textAlign: 'center'
  }}>
    <div style={{ fontSize: '2em', marginBottom: '10px' }}>{icon}</div>
    <div style={{ fontSize: '1em', fontWeight: 'bold' }}>{title}</div>
    <div style={{ fontSize: '1.5em', color: '#000' }}>{value}</div>
  </div>
);

// Datos ficticios para la gráfica
const data = [
  { name: 'Ene', ventas: 8000 },
  { name: 'Feb', ventas: 6000 },
  { name: 'Mar', ventas: 7500 },
  { name: 'Abr', ventas: 9000 },
  { name: 'May', ventas: 8500 },
];

function HomePage() {
  return (
    <div style={{ padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Banner */}
      <div style={{
        background: 'linear-gradient(90deg, #a1c4fd, #c2e9fb)',
        padding: '60px 20px',
        borderRadius: '12px',
        textAlign: 'center',
        marginBottom: '40px',
        color: '#003366'
      }}>
        <h1 style={{ fontSize: '2.2em', marginBottom: '10px' }}>Bienvenido a la Plataforma</h1>
        <p>Resumen de la actividad del sistema</p>
      </div>

      {/* Métricas */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5em', marginBottom: '20px' }}>Métricas del Mes</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <MetricCard title="Clientes Activos" value="1,234" icon={<FaUsers />} bg="#e3f2fd" />
          <MetricCard title="Productos en Stock" value="456" icon={<FaBoxOpen />} bg="#f1f8e9" />
          <MetricCard title="Ventas del Mes" value="1,890" icon={<FaChartLine />} bg="#fff3e0" />
          <MetricCard title="Ingresos" value="$25,670" icon={<FaDollarSign />} bg="#fce4ec" />
        </div>
      </div>

      {/* Gráfico */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5em', marginBottom: '20px' }}>Ventas por Mes</h2>
        <div style={{ width: '100%', maxWidth: '800px', height: '300px', margin: '0 auto' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="ventas" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Botones */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <WireFrameButton to="/buscar-cliente" style={{ margin: '0 10px' }}>
          Buscar Clientes
        </WireFrameButton>
        <WireFrameButton to="/buscar-producto" style={{ margin: '0 10px' }}>
          Buscar Productos
        </WireFrameButton>
      </div>
    </div>
  );
}

export default HomePage;
