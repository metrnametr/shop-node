const path = require('path')
const fs = require('fs')

class Books{
    constructor(title, price, url){
        this.title = title;
        this.price = price;
        this.url = url;
        this.id = Math.random();
    }

    getItem(){
        return {
            title: this.title,
            price: this.price,
            url: this.url,
            id: this.id,
        }
    }

    async save(){
        const data = await Books.getAllBooks();
        const books = JSON.parse(data)
        const book = this.getItem();
        const newItems = [ book, ...books];
        await Books.saveItems(newItems);
    }

    async delete(id){
        const data = await Books.getAllBooks();
        const books = JSON.parse(data);
        const idx = books.findIndex( item => item.id === id)
        const newItems = [
            ...books.slice(0, idx),
            ...books.slice(idx + 1)
        ];
        await Books.saveItems(newItems)
    }

    async edit(newItem){
        const { id } = newItem;
        const data = await Books.getAllBooks();
        const books = JSON.parse(data);
        const idx = books.findIndex( item => item.id === id)
        const newItems = [
            ...books.slice(0, idx),
            newItem,
            ...books.slice(idx + 1)
        ];
        await Books.saveItems(newItems)
    }

    static async saveItems(newItems){
        return new Promise((resolve, reject) => {
            fs.writeFile(path.join(__dirname, '..', 'data', 'books.json'),
            JSON.stringify(newItems),
            (error) => (error) ? reject(error) : resolve()
            )
        })
    }

    static async getBookById(id){
        const data = await Books.getAllBooks()
        const books = JSON.parse(data)
        const book = books.find( item => item.id === id)
        return book;
    }

    static async getAllBooks(){
        return new Promise((resolve, reject) => {
            fs.readFile(
            path.join(__dirname, '..', 'data', 'books.json'),
            'utf-8',
            (error, content) =>  (error) ? reject(error) : resolve(content)
            )
        })
    }
}

module.exports = Books