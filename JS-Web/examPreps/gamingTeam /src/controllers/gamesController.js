const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('games/create');
});

router.get('/details')

module.exports = router;
