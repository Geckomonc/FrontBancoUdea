import React from 'react';
import '../styles/Clientes.css';

const VerCliente = () => {
  const clientes = [
    { id: 1, firstName: 'Ana', lastName: 'Pérez', accountNumber: '123456789', balance: 500000 },
    { id: 2, firstName: 'Luis', lastName: 'Gómez', accountNumber: '987654321', balance: 320000 },
    { id: 3, firstName: 'Carlos', lastName: 'Ramírez', accountNumber: '456789123', balance: 750000 },
    { id: 4, firstName: 'Lucía', lastName: 'Martínez', accountNumber: '741852963', balance: 150000 },
  ];

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