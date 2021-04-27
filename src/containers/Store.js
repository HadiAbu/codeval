import React, {useState} from 'react';
import { Container,Button } from 'react-bootstrap';
import Product from '../components/Product';
import ProductToShow from '../components/ProductToShow';
import Utils from '../utils/Utils';
import './common.css';

const products = [
    {
        id: 1,
        name: 'product 1',
        desc: 'product 1 desc',
        createDate: '22/4/21',
        price: 1
    },
    {   id: 2,
        name: 'product 2',
        desc: 'product 2 desc',
        createDate: '11/4/21',
        price: 2
    },
    {   id: 3,
        name: 'product 3',
        desc: 'product 3 desc',
        createDate: '12/4/21',
        price: 3
    },
    {   id: 4,
        name: 'product 4',
        desc: 'product 4 desc',
        createDate: '17/4/21',
        price: 4
    },
    {   id: 5,
        name: 'product 5',
        desc: 'product 5 desc',
        createDate: '11/5/21',
        price: 5
    },
    {   id: 6,
        name: 'product 6',
        desc: 'product 6 desc',
        createDate: '17/4/21',
        price: 6
    }
];
const Store = () =>{
    const [prods, setProducts] = useState([...products]);
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

    function deleteFromList(product){
        let i = prods.findIndex((x)=> x['id']===product.id);
        prods.splice(i, 1);
        setProducts([...prods]);
        // remove show details view if we have deleted this product
        if(product.id === productToShow.id){
            showDetails(false);
        }
    }
    function addToList(){
        const obj = {id: prods.length+1, name: 'example', desc: 'example desc'};
        prods.push(obj);
        setProductToShow(obj)
        console.log('added example');
        setProducts([...prods]);
    }
    function onSaveProduct(newProduct){
        let i = prods.findIndex((x)=> x['id']===newProduct.id);
        prods[i] = newProduct;
        setProductToShow(newProduct)
        setProducts([...prods]);   
    }
    function handleSelectChange(event){
        const key = event.target.value;
        const tempArr = Utils.sortBy([...prods], key);
        setProducts([...tempArr]);
    }

    return(<div className={'flex-container'}>
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
                {Utils.findBy([...prods],textInput.value).map((pro)=>{
                    return <Product key={pro.id} product={pro} showDetails={showDetails} 
                    setProductToShow={setProductToShow} deleteFromList={deleteFromList}/>
                })}
            </div>
        </Container>
        {show && <ProductToShow product={productToShow} onSave={onSaveProduct}/>}
        
    </div>);
}

export default Store;