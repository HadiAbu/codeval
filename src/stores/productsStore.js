import { v4 as uuidv4 } from 'uuid';

export function createProductsStore(){
    return{
        products : [
            {
                id:  uuidv4(),
                name: 'product 1',
                desc: 'product 1 desc',
                createDate: new Date(),
                price: 1
            },
            {   id:  uuidv4(),
                name: 'product 2',
                desc: 'product 2 desc',
                createDate: new Date(),
                price: 2
            },
            {   id:  uuidv4(),
                name: 'product 3',
                desc: 'product 3 desc',
                createDate: new Date(),
                price: 3
            },
            {   id:  uuidv4(),
                name: 'product 4',
                desc: 'product 4 desc',
                createDate: new Date(),
                price: 4
            },
        ],
        addProduct(prod ){
            this.products.push({id: uuidv4(), name: prod.name, desc: prod.desc, price: prod.price, createDate: new Date()});
        },
        removeProduct(id){
            let i = this.products.findIndex(x => x.id === id ) ;
            this.products.splice(i, 1);
        },
        updateProduct(product){
            let i = this.products.findIndex(x => x.id === product.id );
            if( i!==null && i !== 'undefined' && i > -1 ){
                this.products[i] = product;
            }
        }
    }
};