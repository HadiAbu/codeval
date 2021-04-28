import React from 'react';
import {createProductsStore} from '../stores/productsStore';
import { useLocalObservable } from 'mobx-react'


export const ProductsContext = React.createContext(null);

export const ProductsProvider = ({children}) => {
    const productsStore = useLocalObservable(createProductsStore)

    return <ProductsContext.Provider value={productsStore}>
        {children}
    </ProductsContext.Provider>;
};

export const useProductsStore = () => React.useContext(ProductsContext);