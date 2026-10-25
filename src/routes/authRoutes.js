import { Router } from 'express';
import { celebrate } from 'celebrate';

import {
  registerUserSchema,
  loginUserSchema,
} from '../validations/authValidation.js';
import {
  registerUser,
  refreshUserSession,
  logoutUser,
  loginUser,
} from '../controllers/authControllers.js';

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), registerUser);

router.post('/auth/refresh', refreshUserSession);

router.post('/auth/login', celebrate(loginUserSchema), loginUser);

router.post('/auth/logout', logoutUser);

export default router;
