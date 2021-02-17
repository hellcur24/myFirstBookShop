const fs = require('fs');
const path = require('path');
const Cart = require('./cart');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'products.json');


const getProductsfromfile = (cb) =>{
    fs.readFile(filePath,(error, fileContent) => {
        if(error){
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
}

module.exports = class Product{
    constructor(id, title, url, price, description){
        this.id = id;
        this.title = title;
        this.imageUrl = url;
        this.price = price;
        this.description = description;
    }
    save(){        
       // this.id = Math.random().toString();
        getProductsfromfile(products => {
            if(this.id){
                const existingProductIndex = products.findIndex(product =>product.id === this.id);
                const updatedProducts = [...products];//pull out existing products and store then in a new array
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(filePath, JSON.stringify(updatedProducts), (error) =>{
                    console.log(error);
                });
            }else{
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(filePath, JSON.stringify(products), (error) =>{
                    console.log(error);
                });
             }
        });

    }
    static fetchAll(cb){
        getProductsfromfile(cb);
    }

    static findById(id,cb){
        getProductsfromfile(products =>{
            const product = products.find(p=> p.id === id);
            cb(product);
        });
    }
    static deleteById(id){
        getProductsfromfile(products =>{
            const product = products.find(productInArray => productInArray.id === id);
            const updatedProducts = products.filter(product => product.id !== id);
            fs.writeFile(filePath, JSON.stringify(updatedProducts),(error)=>{
                if(!error){
                    console.log("File updated");
                    Cart.deleteProduct(product.id,product.price);
                }
            });
        });
    }
}