const { Router } = require('express');

const route = Router();


route.get('/', (req, res) => {

    res.render('books')
})


module.exports = route;