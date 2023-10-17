import express from 'express';
import homeRoute from './routes/home';
import authRoute from './routes/auth';

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(`Application server running on port ${PORT}`)
);

app.use(express.json());

app.use('/', homeRoute);
app.use('/auth', authRoute);