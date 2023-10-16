import { Router } from 'express';

const homeRoute = Router();

homeRoute.get('/', (_req, res) => {
    const apiInfo = {
        name: 'Moon API',
        version: '1.0.0',
        description: 'Moon app REST API built with Express and TypeScript.',
        author: 'Prince T. Asamoah',
        routes: {
            home: '/',
        },
    };
    res.json(apiInfo);
});

export default homeRoute;