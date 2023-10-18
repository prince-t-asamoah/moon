import express from 'express';
import homeRoute from './routes/home';
import authRoute from './routes/auth';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT ?? 5000;
dotenv.config();

app.listen(PORT, () =>
    console.log(`Application server running on port ${PORT}`)
);

app.use(express.json());

app.use('/', homeRoute);
app.use('/auth', authRoute);
