import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';

import "./product.css";


const ProductToShow = ({product, onSave}) =>{

    const[name, setName] = useState(product.name);
    const[desc, setDesc] = useState(product.desc);
    const[price, setPrice] = useState(product.price);

    const newProduct = {
        id: product.id,
        name: name,
        desc: desc,
        createDate: product.createDate,
        price: price
    };

    useEffect(() => {
        setName(product.name);
        setDesc(product.desc);
        setPrice(product.price);
      }, [product]);
    
    
    return (
        <div className="to-show-container">
              <img className={''} width={50} height={50} alt={'product'} 
                src={'https://images.unsplash.com/photo-1614159102369-effd79eadadd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}></img>
           
            <h1>{product.name}</h1>
            <label>Product Name: </label>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Product Description: </label>
            <input value={desc} onChange={(e) => setDesc(e.target.value)}/>
            <label>Product Price: </label>
            <input value={price} onChange={(e) => setPrice(e.target.value)}/>
            <div className={'to-the-right'}>
                <Button onClick={()=>onSave(newProduct)}>Save</Button>
            </div>
        </div>
    );
}

export default ProductToShow;