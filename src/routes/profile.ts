import express from 'express';
import { TokenValidation } from '@/middlewares/jwt';
import * as profileController from '@/controllers/profile';

const router = express.Router();

router.post('/create/apply', TokenValidation, profileController.create);

export default router;
