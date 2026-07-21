# API de Tienda de Frutas

Este proyecto consiste en una API REST básica desarrollada con Node.js y Express para gestionar una lista de frutas. La API permite realizar operaciones CRUD mediante endpoints organizados de forma modular.

## Características

- Obtener todas las frutas
- Obtener una fruta por su ID
- Crear una nueva fruta
- Actualizar una fruta existente
- Eliminar una fruta
- Arquitectura modular con rutas y controladores separados

## Tecnologías usadas

- Node.js
- Express
- JavaScript (ES Modules)

## Estructura del proyecto

```bash
API/
├── app.js
├── src/
│   ├── controllers/
│   │   └── frutas.controlles.js
│   ├── routes/
│   │   └── frutas.routes.js
│   └── models/
```

## Requisitos

- Node.js instalado
- npm instalado

## Instalación

1. Clona el repositorio.
2. Entra a la carpeta del proyecto.
3. Instala las dependencias:

```bash
npm install
```

## Ejecución

Para iniciar el servidor, ejecuta:

```bash
node API/app.js
```

O también puedes usar:

```bash
npm start
```

## Endpoints disponibles

### Obtener todas las frutas

```http
GET /api/frutas
```

### Obtener una fruta por ID

```http
GET /api/frutas/:id
```

### Crear una fruta

```http
POST /api/frutas
```

Body ejemplo:

```json
{
  "nombre": "Naranja",
  "color": "Naranja"
}
```

### Actualizar una fruta

```http
PUT /api/frutas/:id
```

Body ejemplo:

```json
{
  "nombre": "Manzana Roja",
  "color": "Rojo"
}
```

### Eliminar una fruta

```http
DELETE /api/frutas/:id
```

## Ejemplo de respuesta

```json
{
  "mensaje": "Fruta registrada con éxito! 🎉",
  "fruta": {
    "id": 4,
    "nombre": "Naranja",
    "color": "Naranja"
  }
}
```

## Notas

Este proyecto está pensado como una práctica inicial de API REST con almacenamiento temporal en memoria, por lo que los cambios no se persisten al reiniciar el servidor.
