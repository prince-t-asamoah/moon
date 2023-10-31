import { Router } from 'express';

import {
    validateForgotPasswordData,
    validateLoginData,
    validateSignupData,
} from '../middlewares/authMiddlewares';
import signupController from '../controllers/auth/signupController';
import loginController from '../controllers/auth/loginController';
import forgotPasswordController from '../controllers/auth/forgotPasswordController';

const authRoute = Router();

authRoute.post('/signup', validateSignupData, signupController);
authRoute.post('/login', validateLoginData, loginController);
authRoute.post('/forgot-password', validateForgotPasswordData, forgotPasswordController);

export default authRoute;
