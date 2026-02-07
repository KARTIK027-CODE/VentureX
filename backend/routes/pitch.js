const express = require('express');
const { generatePitch } = require('../controllers/pitchController');
const { protect } = require('../middleware/auth');
const { checkRole } = require('../middleware/roleCheck');

const router = express.Router();

router.get('/generate', protect, checkRole('founder'), generatePitch);

module.exports = router;
