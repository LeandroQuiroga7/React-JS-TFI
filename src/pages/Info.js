import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Info.css';

const Info = () => {
  return (
    <div className="info-container">
      <header className="info-header">
        <h1>Info del Proyecto</h1>
        <Link to="/dashboard" className="back-link">Volver al Panel</Link>
      </header>

      <section className="info-section">
        <h2>Descripción General</h2>
        <p>Este proyecto es una aplicación web de gestión de inventario (Productos) desarrollada como Trabajo Final Integrador. Permite a los usuarios registrados administrar una lista de productos en tiempo real.</p>
      </section>

      <section className="info-section">
        <h2>Tecnologías Utilizadas</h2>
        <ul>
          <li><strong>React JS:</strong> Biblioteca principal para la interfaz de usuario.</li>
          <li><strong>Firebase (Auth & Firestore):</strong> Para autenticación y base de datos NoSQL.</li>
          <li><strong>React Router DOM:</strong> Para la navegación y protección de rutas.</li>
          <li><strong>CSS Nativo:</strong> Estilos personalizados sin frameworks externos.</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Estructura del Proyecto</h2>
        <pre className="folder-structure">
          {`src/
          ├── context/ (AuthContext)
          ├── pages/   (Login, Register, Dashboard, Info, Stats)
          ├── services/ (Firebase Config)
          └── styles/  (Archivos .css nativos)`}
        </pre>
      </section>

      <section className="info-section">
        <h2>AuthContext y Sesión</h2>
        <p>Se implementó un Context Provider que envuelve la aplicación, permitiendo que el estado del usuario sea global. Firebase <code>onAuthStateChanged</code> detecta automáticamente si hay una sesión activa, protegiendo las rutas privadas.</p>
      </section>

      <section className="info-section">
        <h2>Decisiones Técnicas</h2>
        <p>Se optó por Componentes Controlados en los formularios para asegurar la sincronización de datos y CSS Nativo mediante archivos independientes para mantener la escalabilidad y limpieza del código sin dependencias externas.</p>
      </section>

      <section className="info-section">
        <h2>Dificultades y Soluciones</h2>
        <p>El principal desafío fue la persistencia de datos al recargar la página. Lo solucioné usando useEffect para que, cada vez que el Dashboard se carga, se dispare automáticamente una consulta a Firestore. Así, la interfaz siempre se sincroniza con la base de datos de forma inmediata y el usuario nunca pierde la información de vista.</p>
      </section>
    </div>
  );
};

export default Info;