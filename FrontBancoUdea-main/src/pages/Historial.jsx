import React, { useState } from 'react';
import '../styles/Clientes.css';
import api from '../services/api';

const Historial = () => {
  const [cuenta, setCuenta] = useState('');
  const [transacciones, setTransacciones] = useState([]);

  const buscar = async () => {
    try {
      const res = await api.get(`/transactions/accountNumber/${cuenta}`);
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
            <th>Cuenta Destino</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {transacciones.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.senderAccountNumber}</td>
              <td>{tx.receiverAccountNumber}</td>
              <td>${tx.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Historial;
