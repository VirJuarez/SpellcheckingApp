const express = require('express');
const spellcheckController = require('../controllers/spellcheckController.js');

const router = express.Router();

router.get('/:word', spellcheckController.spellCheck);

module.exports = router;
