import { Router } from 'express';

const authRoute = Router();

authRoute.post('/signup', (req, res) => {
    res.json(req.body);
});

export default authRoute;
