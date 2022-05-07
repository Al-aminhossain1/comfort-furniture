import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import AllInventory from '../AllInventory/AllInventory';


const ManageInventory = () => {
    const [products] = useProduct();

    return (
        <div >
            <h4 className='text-center'>This is Manage Inventory page</h4>
            <div className='container d-flex justify-content-end'>
                <Link to='/addInventory'><button className='btn btn-primary '>Add New Item</button></Link>
            </div>
            <p>product Quantity:{products.length}</p>

            <div className='row justify-content-center gx-5 gy-4 m-5'>
                {
                    products.map(product => <AllInventory key={product._id} product={product}></AllInventory>)
                }
            </div>

        </div>
    );
};

export default ManageInventory;