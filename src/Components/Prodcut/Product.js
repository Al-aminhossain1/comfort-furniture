import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, price, description, quantity, img, _id } = product;
    return (
        <div>
            <div className='col-sm-12 col -md-6 col-lg-4 mt-5'>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top w-100" src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-center">{name}</h5>
                        <p className="card-text"><span className='text-primary font-weight-bold'>Price</span>:${price}</p>
                        <p className="card-text"> <span className='text-primary font-weight-bold'>Quantity</span>:{quantity}</p>
                        <p className="card-text">{description}</p>
                        <p>{_id}</p>
                        <Link to={`/inventory/${_id}`} className="btn btn-primary d-flex justify-content-center">Update product</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;