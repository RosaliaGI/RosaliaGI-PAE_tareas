const express = require('express');
const router = express.Router();
const axios = require('axios');



router.get('', (req, res) => {
    const apiKey = 'aca0663ade084e6586a23cb12066538c';
    axios.get(`https://newsapi.org/v2/top-headlines?country=mx&apiKey=${apiKey}`)
        .then(response => {
            const { articles } = response.data;
            res.render('news', { articles });
        })
        .catch(error => {
            console.log(error);
            res.render('error', { message: 'Ocurrió un error al buscar noticias' });
        });
});


module.exports = router;