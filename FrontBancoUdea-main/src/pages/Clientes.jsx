import React, { useState } from 'react';
import api from '../services/api';
import '../styles/Clientes.css';

const Clientes = () => {
  const [form, setForm] = useState({
    accountNumber: '',
    firstName: '',
    lastName: '',
    balance: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    const { accountNumber, firstName, lastName, balance } = form;
    api.post('/customers', { accountNumber, firstName, lastName, balance })
      .then(() => alert('Cliente creado'))
      .catch(() => alert('Error en creacion'), console.error);
  };

  const handleUpdate = () => {
    const { id, accountNumber, firstName, lastName, balance } = form;
    api.put(`/customers/${id}`, { accountNumber, firstName, lastName, balance })
      .then(() => alert('Cliente actualizado'))
      .catch(console.error);
  };

  return (
    <div className="clientes-container">
      <h2 className="cliente-title">Clientes</h2>
      <div className="formulario-clientes">
        <div>
          <label>Número de cuenta</label>
          <input name="accountNumber" value={form.accountNumber} onChange={handleChange} />
          <label>Nombres</label>
          <input name="firstName" value={form.firstName} onChange={handleChange} />
          <label>Apellidos</label>
          <input name="lastName" value={form.lastName} onChange={handleChange} />
          <label>Balance</label>
          <input name="balance" value={form.balance} onChange={handleChange} />
          <button onClick={handleCreate}>Crear</button>
        </div>
      </div>
    </div>
  );
};

export default Clientes;