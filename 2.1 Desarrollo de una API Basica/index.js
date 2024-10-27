const express = require('express');
const path = require('path'); // Corrección del paréntesis de cierre
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); // Configurando express para archivos estáticos

app.get('/', (req, res) => { // Definiendo una ruta que responde a las solicitudes GET en la raíz
    res.sendFile(path.join(__dirname, 'public/index.html')); // Enviando la respuesta
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El servidor se está ejecutando en http://localhost:${port}`); // Uso de template literals
});
