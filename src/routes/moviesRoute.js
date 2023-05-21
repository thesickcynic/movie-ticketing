const express = require('express')
const movieRouter = express.Router();
const movieController = require('../controllers/movieController');

movieRouter.get('/city/:cityid', movieController.getTheaters);
// router.get('city/:cityid/theater/:theaterid', );
// router.get('city/:cityid/theater/:theaterid/date/:year-:month-:day');

module.exports = movieRouter;