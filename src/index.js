import express, { urlencoded } from 'express';

import {PORT}  from './config/serverConfig.js';
import connectDB from './config/dbConfig.js';
import apiRouter from './routes/apiRoutes.js';

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.status(200).json({ message: 'pong' });
});

app.listen(PORT, () => {
    
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});