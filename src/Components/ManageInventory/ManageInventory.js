import React from 'react';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    return (
        <div>
            <h4>This is Manage Inventory page</h4>
            <div className='d-flex justify-content-center'>
                <Link to='/addInventory'><button className='btn btn-primary '>Add New Item</button></Link>
            </div>
        </div>
    );
};

export default ManageInventory;