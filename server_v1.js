const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/proxy', createProxyMiddleware({ 
    target: 'https://www.exito.com', 
    changeOrigin: true,
    pathRewrite: {
        '^/proxy': '/mercado/frutas-y-verduras', // reescribe la URL
    },
}));

app.listen(3000, () => {
    console.log('Proxy server is running on http://localhost:3000');
});