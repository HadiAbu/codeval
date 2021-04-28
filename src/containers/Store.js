import React, {useState} from 'react';
import { Container,Button } from 'react-bootstrap';
import Product from '../components/Product';
import ProductToShow from '../components/ProductToShow';
import Utils from '../utils/Utils';
import {useProductsStore} from '../contexts/productsContext';
import './common.css';

import {Observer} from 'mobx-react';

const Store = () =>{
    const productsStore = useProductsStore();
    const [prods, setProducts] = useState(productsStore.products);
    const[show, showDetails] = useState(false);
    const[productToShow, setProductToShow]=useState();
    const textInput = useFormInput(''); 
    
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
    
    const deleteFromList = (product) =>{

        productsStore.removeProduct(product.id);

        // remove show details view if we have deleted this product
        if(product.id === 'undefined'){
            showDetails(false);
        }
    }
    const addToList = () => {
        const obj = { name: 'example', desc: 'example desc', price: 12};
        productsStore.addProduct(obj);
        setProductToShow(obj)
    }
    function onSaveProduct(newProduct){
        productsStore.updateProduct(newProduct);
        setProductToShow(newProduct)
    }
    function handleSelectChange(event){
        const key = event.target.value;
        const tempArr = Utils.sortBy([...prods], key);
        setProducts([...tempArr]);
    }

    return <Observer>{ (() => (<div className={'flex-container'}>
        <Container className="store-container">
            <div className={'flex-container'}>
                <Button onClick={ () => addToList()}>Add</Button>
                
                    <input {...textInput} placeholder="Search products"/>
                
                <div>Sort by: 
                    <select name="products" id="select-products" onChange={handleSelectChange}>
                        <option value="id">ID</option>
                        <option value="name">Name</option>
                        <option value="desc">Description</option>   
                        <option value="price">Price</option>
                        <option value="createDate">Created Date</option>
                    </select>
                </div>
            </div>
            <div className={'column-align'}>
                {Utils.findBy(prods,textInput.value).map((pro)=>{
                    return <Product key={pro.id} product={pro} showDetails={showDetails} 
                    setProductToShow={setProductToShow} deleteFromList={deleteFromList}/>
                })}
            </div>
        </Container>
        {show && <ProductToShow product={productToShow} onSave={onSaveProduct}/>}
        
    </div>))}</Observer>;
}

export default Store;