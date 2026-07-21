import { Router } from 'express';
import { obtenerFrutas, obtenerFrutaPorId, registrarFruta, actualizarFruta, eliminarFruta } from '../controllers/frutas.controlles.js';

const router = Router();

// Definimos las rutas y les asignamos su función controladora
router.get('/frutas', obtenerFrutas);
router.get('/frutas/:id', obtenerFrutaPorId);
router.post('/frutas', registrarFruta);
router.put('/frutas/:id', actualizarFruta);
router.delete('/frutas/:id', eliminarFruta);

export default router;
