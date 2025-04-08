import React, { useState } from 'react';
import api from '../services/api';
import '../styles/Transferencias.css'; 

export default function Transferencias() {
  const [form, setForm] = useState({ senderAccountNumber: '', receiverAccountNumber: '', amount: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/transactions', form);
      alert('Transferencia realizada');
    } catch (err) {
      alert('Error en transferencia');
    }
  };

  return (
    <div className="transfer-container">
      <h2 className="transfer-title">Realizar transacciones</h2>
      <form className="transfer-form" onSubmit={handleSubmit}>
        <label>Ingrese la cuenta remitente (que hará el envío del dinero)</label>
        <input name="senderAccountNumber" onChange={handleChange} required />

        <label>Ingrese la cuenta del destinatario (que recibirá el dinero)</label>
        <input name="receiverAccountNumber" onChange={handleChange} required />

        <label>Ingrese el monto de dinero a enviar</label>
        <input name="amount" type="number" onChange={handleChange} required />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

