import { Router } from 'express';
import {
  getNotes,
  getNoteId,
  createNote,
} from '../controllers/studentsControllers.js';

const router = Router();

router.get('/notes', getNotes);

router.get('/notes/:noteId', getNoteId);

router.post('/note', createNote);

export default router;
