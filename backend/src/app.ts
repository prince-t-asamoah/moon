import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import homeRoute from './routes/home';
import authRoute from './routes/auth';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const PORT = process.env.PORT ?? 5000;
const environment = process.env.NODE_ENV ?? 'development';
const envFile = environment === 'production' ? '.env' : '.env.local';

dotenv.config({ path: path.join(__dirname, envFile) });

app.listen(PORT, () =>
    console.log(`Application server running on port ${PORT}`)
);

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use('/', homeRoute);
app.use('/auth', authRoute);
app.use(errorHandler);
