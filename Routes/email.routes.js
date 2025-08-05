import express from 'express';
import { sendMailController } from '../Controllers/email.controller.js';

const router = express.Router();
router.post('/send-email', sendMailController);

export default router;