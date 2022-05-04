import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import Product from '../Prodcut/Product';

const Products = () => {
    const [products] = useProduct();


    return (
        <div>
            <div className='row justify-content-center gx-5 gy-4 m-5'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }

            </div>
            <div className='d-flex justify-content-center'>
                <Link to='/manageInventory'><button className='btn btn-primary '>Manage Inventory</button></Link>
            </div>
        </div>
    );
};

export default Products;