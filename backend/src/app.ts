import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import homeRoute from './routes/home';
import authRoute from './routes/auth';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const PORT = process.env.PORT ?? 5000;
dotenv.config();

app.listen(PORT, () =>
    console.log(`Application server running on port ${PORT}`)
);

app.use(express.json());
app.use(cors({ origin: "*"}))
app.use('/', homeRoute);
app.use('/auth', authRoute);
app.use(errorHandler);
