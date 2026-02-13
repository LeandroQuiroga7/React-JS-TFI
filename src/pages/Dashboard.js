import React, { useState, useEffect } from 'react';
import { db, auth } from '../services/firebaseConfig';
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  updateDoc 
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css'; 

const Dashboard = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  const productosCollection = collection(db, "productos");

  // LEER
  const getProductos = async () => {
    const data = await getDocs(productosCollection);
    setProductos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getProductos();
  }, []);

  // CREAR o ACTUALIZAR
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        const productoDoc = doc(db, "productos", editId);
        await updateDoc(productoDoc, { nombre, precio: Number(precio) });
        setEditId(null);
      } else {
        await addDoc(productosCollection, { nombre, precio: Number(precio) });
      }
      setNombre('');
      setPrecio('');
      getProductos();
    } catch (error) {
      console.error("Error al procesar producto:", error);
    }
  };

  // ELIMINAR
  const deleteProducto = async (id) => {
    try {
      const productoDoc = doc(db, "productos", id);
      await deleteDoc(productoDoc);
      getProductos();
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

 
  const prepareEdit = (prod) => {
    setEditId(prod.id);
    setNombre(prod.nombre);
    setPrecio(prod.precio);
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Panel de Productos</h1>
        <button onClick={handleLogout} className="logout-button">
          Cerrar Sesión
        </button>
      </header>

      <section className="form-section">
        <form onSubmit={handleSubmit} className="product-form">
          <input 
            placeholder="Nombre del producto" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            required 
          />
          <input 
            type="number" 
            placeholder="Precio" 
            value={precio} 
            onChange={(e) => setPrecio(e.target.value)} 
            required 
          />
          <button type="submit" className="submit-button">
            {editId ? 'Actualizar Producto' : 'Agregar Producto'}
          </button>
        </form>
      </section>

      <ul className="product-list">
        {productos.map((prod) => (
          <li key={prod.id} className="product-item">
            <div className="product-info">
              <strong>{prod.nombre}</strong> - ${prod.precio}
            </div>
            <div className="action-buttons">
              <button onClick={() => prepareEdit(prod)} className="edit-btn">
                Editar
              </button>
              <button onClick={() => deleteProducto(prod.id)} className="delete-btn">
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;