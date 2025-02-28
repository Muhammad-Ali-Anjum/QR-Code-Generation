const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');
const { authenticate } = require('../middleware/authMiddleware');

router.post('/upload', authenticate, linkController.uploadLink);
router.get('/links', authenticate, linkController.getLinks);

module.exports = router;