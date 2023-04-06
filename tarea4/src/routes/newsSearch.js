const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiKey = 'aca0663ade084e6586a23cb12066538c';

router.get('', function (req, res) {
    const { query } = req.query;

    if (query) {
        // realiza llamada al API de noticias y buscar noticias relacionadas
        axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`)
            .then(response => {
                const { articles } = response.data;
                // news y los resultados de la búsqueda
                res.render('news', { articles, query });
            })
            .catch(error => {
                console.error(error);
                res.render('error', { message: 'Ocurrió un error al buscar noticias' });
            });
    } else {
        res.render('home');
    };

});



module.exports = router;