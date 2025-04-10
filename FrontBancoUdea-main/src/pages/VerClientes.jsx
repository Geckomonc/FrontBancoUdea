import React, { useEffect, useState } from 'react';  // Corregido el import
import '../styles/Clientes.css';
import api from '../services/api';  // Asegúrate que la ruta del servicio sea correcta

const VerCliente = () => {
  const [clientes, setClientes] = useState([]); // Definir el estado para los clientes

  useEffect(() => {
    // Realizar la solicitud GET a la API del backend
    api.get('/customers')  // Asegúrate que esta ruta sea correcta en tu backend
      .then((res) => {
        setClientes(res.data);  // Almacenar los datos en el estado
      })
      .catch((err) => console.error('Error fetching customers:', err));  // Manejo de errores
  }, []);  // El array vacío asegura que solo se ejecute una vez al cargar el componente

  return (
    <div className="clientes-container">
      <h2 className="cliente-title">Lista de Clientes</h2>
      <table className="tabla-clientes">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Número de Cuenta</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          {/* Mostrar los clientes en la tabla */}
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.firstName}</td>
              <td>{cliente.lastName}</td>
              <td>{cliente.accountNumber}</td>
              <td>${cliente.balance.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerCliente;