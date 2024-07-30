const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');

// Tu token de ipinfo.io
const ipinfoToken = '9ce37cc397c93e';

// Middleware para configurar CSP
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self'");
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/ip', async (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.remoteAddress;
    console.log('Visitor IP:', ip); // Para depuración

    try {
        const response = await axios.get(`https://ipinfo.io/${ip}/geo?token=${ipinfoToken}`);
        const { country, city } = response.data;
        res.json({ ip, country, city });
    } catch (error) {
        console.error('Error fetching geolocation data:', error);
        res.status(500).json({ error: 'Error fetching geolocation data' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
