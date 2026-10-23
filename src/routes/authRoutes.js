import { Router } from 'express';
import { celebrate } from 'celebrate';
import { registerUserSchema } from '../validations/authValidation';
import { registerUser } from '../controllers/authControllers';
