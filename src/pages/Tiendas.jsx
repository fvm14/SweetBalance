import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Tiendas.css';

const tiendas = [
  {
    nombre: 'La Sanahoria',
    direccion: 'Av. Vasco Núñez de Balboa 755, Miraflores',
    lat: -12.124353,
    lng: -77.030102,
    descripcion: 'Tienda orgánica de productos saludables.'
  },
  {
    nombre: 'Madre Natura',
    direccion: 'Av. Angamos Oeste 1102, Miraflores',
    lat: -12.115456,
    lng: -77.030672,
    descripcion: 'Supermercado natural con opciones sin gluten.'
  },
  {
    nombre: 'Viva Salud',
    direccion: 'Calle Alcanfores 495, Miraflores',
    lat: -12.124789,
    lng: -77.028865,
    descripcion: 'Suplementos, frutas secas y alimentos funcionales.'
  }
];

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const Tiendas = () => {
  return (
    <div className="tiendas-container">
      <h1 className="tiendas-titulo">Tiendas Cercanas</h1>

      <div className="mapa-container">
        <MapContainer center={[-12.1205, -77.029]} zoom={14} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {tiendas.map((tienda, i) => (
            <Marker key={i} position={[tienda.lat, tienda.lng]} icon={customIcon}>
              <Popup>
                <strong>{tienda.nombre}</strong><br />
                {tienda.direccion}<br />
                {tienda.descripcion}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="tiendas-lista">
        {tiendas.map((tienda, i) => (
          <div className="tienda-card" key={i}>
            <div className="tienda-nombre">{tienda.nombre}</div>
            <div className="tienda-direccion">{tienda.direccion}</div>
            <button className="tienda-btn">Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tiendas;
