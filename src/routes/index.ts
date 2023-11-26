import express from 'express';
import formRoutes from './form';

const router = express.Router();

router.use('/form', formRoutes);

export default router;
