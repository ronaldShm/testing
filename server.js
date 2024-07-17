const express = require('express');
const app = express();

// Middleware para configurar CSP
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-eval'");
    next();
});

// Rutas y configuración de tu aplicación
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Puerto y servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
