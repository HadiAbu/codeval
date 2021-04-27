import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

import "./product.css";


const ProductToShow = ({product, onSave}) =>{
    const nameInput = useFormInput(product.name); 
    const descInput = useFormInput(product.desc); 
    const priceInput = useFormInput(product.price); 

    const newProduct = {
        id: product.id,
        name: nameInput.value,
        desc: descInput.value,
        createDate: product.createDate,
        price: priceInput.value
    };

    function useFormInput(initialValue){
        const[value, setValue] = useState(initialValue);

        function handleChangeEvent(e){
            setValue(e.target.value);
        }

        return{
            value: value,
            onChange: handleChangeEvent
        }
    }
    
    return (
        <div className="to-show-container">
              <img className={''} width={50} height={50} alt={'product'} 
                src={'https://images.unsplash.com/photo-1614159102369-effd79eadadd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}></img>
           
            <h1>{product.name}</h1>
            <label>Product Name: </label>
            <input {...nameInput}/>
            <label>Product Description: </label>
            <input {...descInput}/>
            <label>Product Price: </label>
            <input {...priceInput}/>
            <div className={'to-the-right'}>
                <Button onClick={()=>onSave(newProduct)}>Save</Button>
            </div>
        </div>
    );
}

export default ProductToShow;