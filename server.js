const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Habilitar CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Servir archivos estáticos desde la carpeta actual
app.use(express.static(__dirname));

// Ruta principal que sirve el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Servir el API de productos en /api/products
app.get('/api/products', (req, res) => {
    // Aquí va la lógica para obtener los productos desde la API
    const products = [
        { name: 'Manzana', price: '$5.00' },
        { name: 'Pera', price: '$4.00' },
        { name: 'Banano', price: '$2.50' }
    ];
    res.json(products);
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
