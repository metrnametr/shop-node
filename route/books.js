const { Router } = require('express');
const Books = require('../model/books')
const route = Router();


route.get('/', async (req, res) => {
    const data = await Books.getAllBooks();
    const books = JSON.parse(data)
    res.render('books', {
        title: 'Books catalog',
        books
    })
})


module.exports = route;