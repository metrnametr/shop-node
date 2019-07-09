const { Router } = require('express');
const Books = require('../model/books')
const route = Router();


route.get('/', (req, res) => {

    res.render('add')
})

route.post('/', async (req, res) => {
    const { title, price, url } = req.body;
    const book = new Books(title, price, url)
    await book.save();
    res.redirect('/books')
})
module.exports = route;