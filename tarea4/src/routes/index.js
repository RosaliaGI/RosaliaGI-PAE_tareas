const router = require('express').Router();
const rutasNewsSearch = require('./newsSearch');
const rutasNewsAll = require('./newsAll');


router.use('', rutasNewsSearch);
router.use('/all', rutasNewsAll);
router.get('*', function (req, res) {
    res.status(404).send('Página no encontrada');
})

module.exports = router;