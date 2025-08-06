
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form.username, form.password);
    if (success) {
      navigate(form.username === 'admin' ? '/admin' : '/');
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white shadow-md rounded p-6">
        <h2 className="text-2xl font-bold mb-4">Вход</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input className="input input-bordered w-full mb-2 p-2 rounded" type="text" placeholder="Логин" onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <input className="input input-bordered w-full mb-4 p-2 rounded" type="password" placeholder="Пароль" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full" type="submit">Войти</button>
      </form>
    </div>
  );
};
