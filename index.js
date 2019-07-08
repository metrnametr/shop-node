const express = require('express')
const handlebars = require('express-handlebars');
const path = require('path')
const routeHome = require('./route/home')
const routeAdd = require('./route/add')
const routePackage = require('./route/package')
const routeBook = require('./route/book')
const routeBooks = require('./route/books')

const hbs = handlebars.create({
    defaultLayout: 'index',
    extname: 'hbs',
})


const app = express();


app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.set(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, 'public')))


app.use('/', routeHome)
app.use('/add', routeAdd)
app.use('/package', routePackage)
app.use('/books', routeBooks)
app.use('/book', routeBook)

app.listen(3001, () => console.log('start'))