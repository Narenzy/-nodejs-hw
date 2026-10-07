import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
} from '../controllers/notesControllers.js';

const router = Router();

router.get('/notes', getAllNotes);

router.get('/notes/:noteId', getNoteById);

router.post('/note', createNote);

router.delete('notes/:noteId', deleteNote);

export default router;
