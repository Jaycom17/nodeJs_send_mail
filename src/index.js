import express from 'express';
import send_email from './routes/index.js';


import { PORT } from './config.js';

const app = express();

app.use(express.json());

app.use(send_email);

app.listen(PORT);

console.log(`Server running on port ${PORT}`);