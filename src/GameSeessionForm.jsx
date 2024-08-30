import React, { useState } from 'react';

const GameSessionForm = ({ onSessionCreated }) => {
  const [form, setForm] = useState({
    hostname: '',
    players: 1,
    map: '',
    mode: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://api-url.com/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      onSessionCreated();
    } else {
      alert('Failed to create session');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="hostname" value={form.hostname} onChange={handleChange} placeholder="Hostname" required />
      <input type="number" name="players" value={form.players} onChange={handleChange} placeholder="Players" required />
      <input type="text" name="map" value={form.map} onChange={handleChange} placeholder="Map" required />
      <input type="text" name="mode" value={form.mode} onChange={handleChange} placeholder="Mode" required />
      <button type="submit">Create Session</button>
    </form>
  );
};

export default GameSessionForm;
