const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tareas = [
    { id: 1, titulo: 'Tarea 1', descripcion: 'Dormir', estado: false },
    { id: 2, titulo: 'Tarea 2', descripcion: 'Llorar', estado: true },
    { id: 3, titulo: 'Tarea 3', descripcion: 'Comer', estado: false },
    { id: 4, titulo: 'Tarea 4', descripcion: 'Ducharse', estado: true },
    { id: 5, titulo: 'Tarea 5', descripcion: 'Ejercitarse', estado: false }
];

// Ruta GET para obtener todas las tareas
app.get('/tareas', (req, res) => {
    res.json(tareas);
});

// Ruta GET para obtener una tarea por su ID
app.get('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tarea = tareas.find(t => t.id === id);

    if (!tarea) {
        return res.status(404).json({ mensaje: 'Tarea no encontrada' });
    }

    res.json(tarea);
});

// Ruta POST para crear una nueva tarea
app.post('/tareas', (req, res) => {
    const { descripcion, estado } = req.body;

    // Crear nueva tarea con título generado automáticamente
    const nuevaTarea = {
        id: tareas.length + 1, // Generar un ID incrementado
        titulo: `Tarea ${tareas.length + 1}`, // Generar automáticamente el título
        descripcion,
        estado: estado || false
    };

    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});

// Ruta PUT para actualizar una tarea existente
app.put('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { descripcion, estado } = req.body;

    const tarea = tareas.find(t => t.id === id);

    if (!tarea) {
        return res.status(404).json({ mensaje: 'Tarea no encontrada' });
    }

    // Actualizar los campos de la tarea
    tarea.descripcion = descripcion || tarea.descripcion;
    tarea.estado = estado !== undefined ? estado : tarea.estado;

    res.json(tarea);
});

// Ruta DELETE para eliminar una tarea por su ID
app.delete('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = tareas.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ mensaje: 'Tarea no encontrada' });
    }

    // Eliminar la tarea de la colección
    tareas.splice(index, 1);

    res.json({ mensaje: `Tarea ${id} eliminada` });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutandoo en http://localhost:${port}`);
});
