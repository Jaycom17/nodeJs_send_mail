const express = require('express');
const app = express();

app.use(express.json());

app.use(require('./routes/index.js'));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});