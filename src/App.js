import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const { user } = useAuth(); 

  return (
    <Router>
      <Routes>
       
        <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/info" element={<h1>Página Informativa (Próximamente)</h1>} />

        <Route 
          path="/dashboard" 
          element={user ? <h1>Dashboard (Próximamente)</h1> : <Navigate to="/login" />} 
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;