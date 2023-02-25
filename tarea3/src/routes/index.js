const router = require('express').Router();
const rutasGaleria = require('./galeria');
const rutasHobbies = require('./hobbies');
const rutasContacto = require('./contacto');
const rutasHome = require('./home');


router.use('', rutasHome);
router.use('/galeria', rutasGaleria);
router.use('/hobbies', rutasHobbies);
router.use('/contacto', rutasContacto);
router.get('*', function (req, res) {
    res.status(404).send('Página no encontrada');
})


module.exports = router;