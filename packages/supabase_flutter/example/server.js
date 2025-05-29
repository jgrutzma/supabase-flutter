const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Servir archivos estáticos desde la carpeta build/web
app.use(express.static(path.join(__dirname, 'build/web')));

// Para cualquier ruta no encontrada, servir index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/web/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
}); 