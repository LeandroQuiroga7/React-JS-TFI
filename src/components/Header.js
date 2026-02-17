import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../services/firebaseConfig'; 
import { signOut } from 'firebase/auth'; 

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      navigate('/login');
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <header className="header-container">
      <h1>Inventario Grupal</h1>
      <nav className="header-actions">
        <Link to="/dashboard" className="nav-btn">Dashboard</Link>
        <Link to="/stats" className="nav-btn">Estadísticas</Link>
        <Link to="/info" className="nav-btn">Información</Link>
        <button onClick={handleLogout} className="btn-logout">
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};