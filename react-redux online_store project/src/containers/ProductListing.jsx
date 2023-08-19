import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/actions/productActions";
import axios from "axios";
import ProductComponent from './ProductComponent';

 const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async() =>{
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(response.data));
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    console.log("products: ", products);

    

  return (

    
        <div className="ui grid container">
            <h1><ProductComponent /></h1>
        </div>

    
    );
};
export default ProductListing;