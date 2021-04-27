import React from 'react';
import { Button } from 'react-bootstrap';
import './product.css';

const Product = ({product, setProductToShow, showDetails, deleteFromList}) =>{
    const handleClick = () =>{
        setProductToShow(product);
        showDetails(true);
    }
    return (
        <div className="product-container">
            <div className="img-container"onClick={handleClick}>
                <img className={''} width={50} height={50} alt={'product'} 
                src={'https://images.unsplash.com/photo-1614159102369-effd79eadadd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}></img>
            </div>
            <div className="name-desc"onClick={handleClick}>
                <h3>{product.name} </h3>
                <h5>{product.desc}</h5>
            </div>
            <Button onClick={()=>deleteFromList(product)}>Delete</Button>
        </div>
    );
}

export default Product;