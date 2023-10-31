import { Request, Response } from 'express';

export const errorHandler = (error: Error, _req: Request, res: Response) => {
    console.log(error);
    return res
        .status(500)
        .json({ error: { status: '500', message: 'Internal server error' } });
};
