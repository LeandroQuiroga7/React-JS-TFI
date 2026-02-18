## 📝 Descripción General
Este proyecto es una aplicación web de gestión de inventario (Productos) desarrollada como Trabajo Final Integrador. Permite a los usuarios registrados administrar una lista de productos en tiempo real.

---

## 🚀 Tecnologías Utilizadas
- **React.js**: Biblioteca principal para la interfaz de usuario.
- **Firebase (Firestore)**: Base de datos NoSQL en tiempo real para la persistencia de productos.
- **Firebase (Auth)**: Sistema de autenticación de usuarios (Email/Password).
- **React Router Dom**: Para la navegación y protección de rutas.
- **CSS Nativo**: Estilos personalizados sin frameworks externos.

---

## ⚙️ Instalación y Ejecución Local

- **Clonar el repositorio**: `git clone https://github.com/LeandroQuiroga7/React-JS-TFI.git`

- **Entrar al proyecto**: `cd React-JS-TFI`

- **Instalar las dependencias**: `npm install`

- **Conexión a Backend**: La vinculación con Firebase se encuentra pre-configurada en `src/services/firebaseConfig.js`.

- **Iniciar la aplicación**: `npm start`

La aplicación se ejecutará en modo desarrollo. Abre http://localhost:3000 para verla en el navegador.

---

## 📁 Estructura del Proyecto

```text
src/
 ├── components/ - Componentes reutilizables
 ├── context/    - Gestión de estado global (AuthContext).
 ├── pages/      - Vistas principales (Login, Register, Dashboard, Info, Stats).
 ├── services/   - Configuración y conexión con Firebase.
 └── styles/     - Archivos CSS independientes para cada página.
```

---

## 🧠 Consideraciones Generales
- **Seguridad:** Se implementaron reglas de seguridad en Firestore para permitir el acceso únicamente a usuarios autenticados (`request.auth != null`).
- **Lógica de Datos:** En la sección de estadísticas, se utilizaron métodos de JavaScript como `.reduce()` para calcular dinámicamente el producto más costoso y el más económico.
- **Arquitectura:** Se utilizó un `AuthContext` para gestionar el estado de la sesión de forma global, permitiendo una navegación protegida.
- **Diseño:** Se optó por CSS nativo para demostrar el dominio de los fundamentos de diseño web sin dependencia de librerías externas.