const express = require('express');
const router = express.Router();
const movieRoute = require('./movies.route');

router.use('/movies', movieRoute);

module.exports = router;