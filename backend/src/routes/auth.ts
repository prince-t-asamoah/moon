import { Router } from 'express';

import {
    validateLoginData,
    validateSignupData,
} from '../middlewares/authMiddlewares';
import signupController from '../controllers/auth/signupController';
import loginController from '../controllers/auth/loginController';

const authRoute = Router();

authRoute.post('/signup', validateSignupData, signupController);
authRoute.post('/login', validateLoginData, loginController);

export default authRoute;
