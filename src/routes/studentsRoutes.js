import { Router } from 'express';
import {
  getStudents,
  getStudentId,
  createStudent,
} from '../controllers/studentsControllers.js';

const router = Router();

router.get('/students', getStudents);

router.get('/students/:studentId', getStudentId);

router.post('/student', createStudent);

export default router;
