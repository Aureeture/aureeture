import express from 'express';
import { requireAuth } from '../middleware/auth';
import { getMe, updateProfile, deleteAccount, handleWebhook } from '../controllers/authController';

const router = express.Router();

// Webhook endpoint (no auth required)
router.post('/webhook', handleWebhook);

// Protected routes (require authentication)
router.use(requireAuth);

router.route('/me')
  .get(getMe)
  .put(updateProfile)
  .delete(deleteAccount);

export default router;
