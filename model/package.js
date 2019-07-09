const path = require('path')
const fs = require('fs')


class Package{
    constructor(){
        this.count = 0;
        this.packages = [];
    }

    

    static getItemsPackage(){
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '..', 'data', 'package.json')),
            'utf-8',
            (error, content) => (error) ? reject(error) : resolve(content)
        })
    }
}