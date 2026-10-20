import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import { celebrate } from 'celebrate';
import {
  getAllNotesSchema,
  noteIdSchema,
} from '../validation/notesValidation.js';

const router = Router();

router.get('/notes', celebrate(getAllNotesSchema), getAllNotes);

router.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);

router.post('/notes', createNote);

router.patch('/notes/:noteId', updateNote);

router.delete('/notes/:noteId', deleteNote);

export default router;
