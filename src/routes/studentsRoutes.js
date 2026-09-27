import { Router } from 'express';
import {
  getStudents,
  getStudentId,
} from '../controllers/studentsControllers.js';

const router = Router();

router.get('/students', getStudents);

router.get('/students/:studentId', getStudentId);

export default router;
