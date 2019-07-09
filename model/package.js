const path = require('path')
const fs = require('fs')
const Books = require('./books')

class Package{
    constructor(){
        this.count = 0;
        this.packages = [];
    }

    async save(id){
        const book = await Books.getBookById();
        this.count++;
        this.packages = [...this.packages, book]
        await Books.saveItems();
    }

    static async saveItems(newItems){
        return new Promise( (resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'package.json'),
                JSON.stringify({ count: this.count, packages: this.packages }),
                (error) => (error) ? reject(error) : resolve()
            )
        })
    }
    static getItemsPackage(){
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '..', 'data', 'package.json'),
            'utf-8',
            (error, content) => (error) ? reject(error) : resolve(content)
            )
        })
    }
}

module.exports = Package;