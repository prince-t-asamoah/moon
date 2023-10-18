import { Request, Response } from 'express';

export const errorHandler = (error: Error, _req: Request, res: Response) => {
    console.log(error);
    return res
        .status(500)
        .json({ errors: [{ message: 'Internal server error' }] });
};
