import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Register from './pages/Register';

function App() {
  const { user } = useAuth(); 

  return (
    <Router>
      <Routes>
       
        <Route path="/register" element={<Register />} />
        
        <Route path="/login" element={<h1>Página de Login (Próximamente)</h1>} />
        <Route path="/info" element={<h1>Página Informativa (Próximamente)</h1>} />

        <Route 
          path="/dashboard" 
          element={user ? <h1>Dashboard (Próximamente)</h1> : <Navigate to="/login" />} 
        />

        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
}

export default App;