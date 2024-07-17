const express = require('express');
const app = express();
const path = require('path');

// Middleware para configurar CSP
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self'");
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/ip', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('Visitor IP:', ip); // Para depuración
    res.json({ ip });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
