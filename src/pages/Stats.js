import React, { useState, useEffect } from 'react';
import { db } from '../services/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Header } from '../components/Header'; 
import { Footer } from '../components/Footer';
import '../styles/Stats.css';

const Stats = () => {
  const [stats, setStats] = useState({
    totalItems: 0,
    masBarato: { nombre: '-', precio: 0 },
    masCaro: { nombre: '-', precio: 0 },
  });

  useEffect(() => {
    const calcularEstadisticas = async () => {
      const querySnapshot = await getDocs(collection(db, "productos"));
      
      const lista = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        precio: Number(doc.data().precio)
      }));

      if (lista.length > 0) {
        
        const totalItems = lista.length;
        
        
        const masBarato = lista.reduce((prev, curr) => 
          (prev.precio < curr.precio) ? prev : curr
        );

        
        const masCaro = lista.reduce((prev, curr) => 
          (prev.precio > curr.precio) ? prev : curr
        );

        
        setStats({
          totalItems,
          masBarato,
          masCaro,
        });
      }
    };

    calcularEstadisticas();
  }, []);

  return (
    <div className="stats-container">
      <Header />
      <main className="stats-content">
        <h2>Estadísticas del Inventario</h2>

      <div className="stats-grid">        
        <div className="stat-card">
          <h3>Total de Productos</h3>
          <p className="stat-number">{stats.totalItems}</p>
          <span>Unidades registradas</span>
        </div>
        
        <div className="stat-card">
          <h3>Más Económico</h3>
          <p className="stat-number">{stats.masBarato.nombre}</p>
          <span>Precio: ${stats.masBarato.precio}</span>
        </div>
        
        <div className="stat-card">
          <h3>Más Costoso</h3>
          <p className="stat-number">{stats.masCaro.nombre}</p>
          <span>Precio: ${stats.masCaro.precio}</span>
        </div>
        </div>
        </main>
      <Footer />
    </div>
  );
};

export default Stats;