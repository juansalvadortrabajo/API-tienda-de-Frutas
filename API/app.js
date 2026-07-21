import express from 'express';
import rutasFrutas from './src/routes/frutas.routes.js';

const app = express();
const PORT = 3000;

// Middleware para entender JSON
app.use(express.json());

// Conectamos las rutas a nuestra aplicación bajo /api
app.use('/api', rutasFrutas);

// Ruta base opcional
app.get('/', (req, res) => {
  res.send('🍎 API de Frutas Modularizada y Funcional 🍌');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor modular corriendo en http://localhost:${PORT}`);
  console.log(`📍 Rutas disponibles: http://localhost:${PORT}/api/frutas`);
});
