const express = require('express');
const router = express.Router();

// @route   GET api/users/me
// @desc    Get current user
// @access  Private
router.get('/me', (req, res) => {
  res.json({ message: 'Get current user' });
});

module.exports = router;
