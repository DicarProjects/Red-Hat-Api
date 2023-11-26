import express from 'express';
import { runFormRecordProcess } from '../controllers/form';

const router = express.Router();

router.post('/create-new-form', runFormRecordProcess);

export default router;
