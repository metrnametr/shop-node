const { Router } = require('express');

const route = Router();


route.get('/', (req, res) => {

    res.render('package')
})


module.exports = route;