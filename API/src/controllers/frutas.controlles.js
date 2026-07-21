// El array vive dentro del controlador
let frutas = [
  { id: 1, nombre: 'Manzana', color: 'Rojo' },
  { id: 2, nombre: 'Plátano', color: 'Amarillo' },
  { id: 3, nombre: 'Kiwi', color: 'Verde' }
];

// Función para obtener todas las frutas
export const obtenerFrutas = (req, res) => {
  res.status(200).json(frutas);
};

// Función para obtener una fruta por su ID
export const obtenerFrutaPorId = (req, res) => {
  const idBuscado = parseInt(req.params.id);
  const frutaEncontrada = frutas.find(f => f.id === idBuscado);

  if (!frutaEncontrada) {
    return res.status(404).json({ mensaje: 'Fruta no encontrada ❌' });
  }

  res.status(200).json(frutaEncontrada);
};

// Función para registrar una fruta
export const registrarFruta = (req, res) => {
  const { nombre, color } = req.body;

  if (!nombre || !color) {
    return res.status(400).json({ mensaje: 'Faltan datos obligatorios ⚠️' });
  }

  const nuevoId = frutas.length > 0 ? frutas[frutas.length - 1].id + 1 : 1;
  const nuevaFruta = { id: nuevoId, nombre, color };

  frutas.push(nuevaFruta);

  res.status(201).json({
    mensaje: 'Fruta registrada con éxito! 🎉',
    fruta: nuevaFruta
  });
};

// Función para actualizar una fruta
export const actualizarFruta = (req, res) => {
  const idBuscado = parseInt(req.params.id);
  const { nombre, color } = req.body;
  const frutaIndex = frutas.findIndex(f => f.id === idBuscado);

  if (frutaIndex === -1) {
    return res.status(404).json({ mensaje: 'Fruta no encontrada ❌' });
  }

  if (!nombre || !color) {
    return res.status(400).json({ mensaje: 'Faltan datos obligatorios ⚠️' });
  }

  frutas[frutaIndex] = { ...frutas[frutaIndex], nombre, color };

  res.status(200).json({
    mensaje: 'Fruta actualizada con éxito! ✨',
    fruta: frutas[frutaIndex]
  });
};

// Función para eliminar una fruta
export const eliminarFruta = (req, res) => {
  const idBuscado = parseInt(req.params.id);
  const frutaIndex = frutas.findIndex(f => f.id === idBuscado);

  if (frutaIndex === -1) {
    return res.status(404).json({ mensaje: 'Fruta no encontrada ❌' });
  }

  const frutaEliminada = frutas.splice(frutaIndex, 1)[0];

  res.status(200).json({
    mensaje: 'Fruta eliminada con éxito! 🗑️',
    fruta: frutaEliminada
  });
};
