import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import { getNotesSchema } from '../validation/notesValidation.js';

const router = Router();

router.get('/notes', celebrate(getNotesSchema), getAllNotes);

router.get('/notes/:noteId', getNoteById);

router.post('/notes', createNote);

router.patch('/notes/:noteId', updateNote);

router.delete('/notes/:noteId', deleteNote);

export default router;
