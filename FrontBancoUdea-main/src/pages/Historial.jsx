import React, { useState } from 'react';
import '../styles/Clientes.css';
import api from '../services/api';

const Historial = () => {
  const [cuenta, setCuenta] = useState('');
  const [transacciones, setTransacciones] = useState([
    {
      id: 1,
      senderAccountNumber: '123456789',
      senderName: 'Ana Pérez',
      receiverAccountNumber: '987654321',
      receiverName: 'Luis Gómez',
      amount: 150000,
      date: '2025-04-01 10:30'
    },
    {
      id: 2,
      senderAccountNumber: '987654321',
      senderName: 'Luis Gómez',
      receiverAccountNumber: '123456789',
      receiverName: 'Ana Pérez',
      amount: 50000,
      date: '2025-04-02 14:45'
    },
    {
      id: 3,
      senderAccountNumber: '456789123',
      senderName: 'Carlos Ramírez',
      receiverAccountNumber: '741852963',
      receiverName: 'Lucía Martínez',
      amount: 200000,
      date: '2025-04-03 09:15'
    }
  ]);

  const buscar = async () => {
    try {
      const res = await api.get(`/transactions/${cuenta}`);
      setTransacciones(res.data);
    } catch {
      alert('Error al buscar transacciones');
    }
  };

  return (
    <div className="clientes-container">
      <h2 className="cliente-title">Historial de Transacciones</h2>

      <div className="formulario-clientes" style={{ justifyContent: 'flex-start' }}>
        <input
          value={cuenta}
          onChange={e => setCuenta(e.target.value)}
          placeholder="Número de cuenta"
        />
        <button onClick={buscar}>Buscar</button>
      </div>

      <table className="tabla-clientes">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cuenta Origen</th>
            <th>Nombre Origen</th>
            <th>Cuenta Destino</th>
            <th>Nombre Destino</th>
            <th>Monto</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {transacciones.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.senderAccountNumber}</td>
              <td>{tx.senderName}</td>
              <td>{tx.receiverAccountNumber}</td>
              <td>{tx.receiverName}</td>
              <td>${tx.amount.toLocaleString()}</td>
              <td>{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Historial;
