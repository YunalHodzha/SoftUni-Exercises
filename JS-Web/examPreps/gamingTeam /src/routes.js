const router = require('express').Router();
const homeController = require('./controllers/homeController.js');
const gamesController = require('./controllers/gamesController.js');
const usersController = require('./controllers/userController.js');

router.use(homeController);
router.use('/games', gamesController);
router.use('/users', usersController);

module.exports = router;
