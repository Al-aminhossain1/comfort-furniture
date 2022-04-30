import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
    const { name, price, description, quantity, img, _id } = product;
    return (
        <div className=' col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={img} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price:{price}</p>
                    <p className="card-text">Quantity:{quantity}</p>
                    <p className="card-text">{description}</p>
                    <p>{_id}</p>
                    <Link to={`/inventory/${_id}`} className="btn btn-primary">Update product</Link>
                </div>
            </div>

        </div>
    );
};

export default Products;