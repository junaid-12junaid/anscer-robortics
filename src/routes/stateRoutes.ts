import express from 'express';
import { createState, getStates, getStateById, updateState, deleteState } from '../controllers/stateController';
import { isAuthenticated } from '../middleware/authMiddleware';
import { validateState, validate } from '../utils/validation';

const router = express.Router();

router.post('/states',  validateState, validate, createState);
router.get('/states', getStates);
router.get('/states/:id', getStateById);
router.put('/states/:id', validateState, validate, updateState);
router.delete('/states/:id', deleteState);

export default router;
