import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple check for development purposes
    if (username === 'admin' && password === 'admin') {
      // Redirect to the dashboard or some other page
      navigate('/dashboard');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="w-full max-w-md p-8 space-y-6 bg-opacity-80 bg-gray-900 rounded-lg shadow-xl backdrop-blur-lg">
        <h2 className="text-3xl font-extrabold text-center text-white">Connexion</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300">
              Nom Utilisateur
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Entrez votre nom d'utilisateur"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Mot de Passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-white bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
